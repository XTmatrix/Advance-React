import { renderToStaticMarkup } from "react-dom/server";
import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";

function useRestaurantInfo(id) {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + id);
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };
  return resInfo;
}

export default useRestaurantInfo;
