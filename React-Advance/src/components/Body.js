// Import necessary modules and components
import RestaurantCard, { PromotedLabelRestaurant } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineOfflineStatus from "../customHooks/useOnlineOfflineStatus";

const Body = () => {
  // State variables to manage restaurant data and search/filter functionality
  const [resObjectList, setResObjectList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Log the restaurant object list for debugging purposes
  console.log(resObjectList);

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // useEffect hook to fetch restaurant data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Fetch restaurant data from Swiggy API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.987797828010553&lng=72.63618406425164&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      // Parse the JSON response
      const json = await response.json();
      console.log(json);

      // Extract restaurant data from the fetched JSON
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(restaurants);

      // Set restaurant data to state
      setResObjectList(restaurants);
      setFilteredList(restaurants);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Check if the user is online or offline
  const online = useOnlineOfflineStatus();

  // If the user is offline, display an appropriate message
  if (online === false)
    return (
      <p>
        HaHa... you must be joking right? you know what to check! you are smart!
      </p>
    );

  const RestaurantWithPromotedLabel = PromotedLabelRestaurant(RestaurantCard);

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Render the Shimmer UI while waiting for restaurant data
  return resObjectList.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      {/* Search and Filter Section */}
      <div className="filter flex justify-center items-center mb-10 gap-8">
        {/* Search input and button */}
        <div className="flex items-center gap-3">
          <span>
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search Restaurant"
              className="py-[5px] pr-[50px] pl-3 bg-slate-200 rounded-md"
            />
          </span>
          <span>
            <button
              onClick={() => {
                // Filter restaurants based on search text
                const filterSearchRestaurant = resObjectList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredList(filterSearchRestaurant);
              }}
              className="bg-green-300 py-[5px] px-[10px] rounded-lg"
            >
              Search
            </button>
          </span>
        </div>

        {/* Button to filter top-rated restaurants */}
        <button
          className="bg-green-300 py-[5px] px-[10px] rounded-lg"
          onClick={() => {
            const topRated = resObjectList.filter(
              (val) => val.info.avgRating > 4.5
            );
            setFilteredList(topRated);
          }}
        >
          Top Rated Restaurants
        </button>

        {/* Button to clear filters and show all restaurants */}
        <button
          onClick={() => {
            setFilteredList(resObjectList);
          }}
          className="bg-orange-300 py-[5px] px-[10px] rounded-lg"
        >
          Clear Filter
        </button>
      </div>
      {/* //--------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      {/* Restaurant Cards Section */}
      <div className="flex flex-wrap justify-evenly w-[1290px] mx-auto mb-[100px]">
        {filteredList.map((res) => {
          return (
            <Link
              key={res.info.id}
              to={`/restaurantInfo/${res.info.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* RestaurantCard component displays restaurant details */}
              {res.info.sla.deliveryTime < 30 ? (
                <RestaurantWithPromotedLabel resObject={res} />
              ) : (
                <RestaurantCard resObject={res} />
              )}
              {/* <RestaurantCard resObject={res} /> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
