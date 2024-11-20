import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props.resObject.info);
  const {
    name,
    avgRating,
    cuisines,
    locality,
    cloudinaryImageId,
    costForTwo,
    sla,
  } = props.resObject.info;

  return (
    <div className="mb-10 w-[260px] bg-white shadow-md rounded-2xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={RES_URL + cloudinaryImageId}
        alt={`${name} image`}
        className="w-full h-[190px] object-cover rounded-2xl"
      />
      <div className="cardText mt-3 p-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600">{costForTwo}</p>
        <div className="flex items-center mt-1 space-x-1">
          <span className="text-sm font-medium text-yellow-500">
            {avgRating}/5
          </span>
          <span className="text-xs text-gray-500">| {sla.slaString}</span>
        </div>
        <p className="mt-1 text-sm text-gray-600 truncate">
          {cuisines.join(", ")}
        </p>
        <p className="mt-2 text-sm text-gray-800 font-medium">{locality}</p>
      </div>
    </div>
  );
};

export const PromotedLabelRestaurant = (RestaurantCard) => {
  return (props) => {
    const { deliveryTime } = props.resObject.info.sla;

    return (
      <div>
        <label className="absolute bg-orange-300 rounded-[5px] z-10 ">{`delivered in ${deliveryTime} mins`}</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
