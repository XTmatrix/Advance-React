import React, { useState } from "react";
// import Accordion from "react-bootstrap/Accordion";
import { RES_URL } from "../utils/constants";

function Accord({ cardInfo, cardTitle, showItems }) {
  const [showItems, useShowItems] = useState(false);
  return (
    <div>
      <div className="container ">
        <div className="Accordion-Header">
          <div
            className="Header-text flex justify-between shadow-md p-4 rounded-lg cursor-pointer"
            onClick={() => useShowItems(!showItems)}
          >
            <div className="font-bold text-[16px]">
              <span>{cardTitle}</span>
              <span>({cardInfo.length})</span>
            </div>
            <span>⬇️</span>
          </div>
        </div>
        {showItems && (
          <div className="Accordion-body mb-2">
            {cardInfo.map((data) => {
              const {
                id,
                imageId,
                name,
                defaultPrice,
                finalPrice,
                price,
                ratings,
                description,
              } = data.card.info;

              return (
                <div className="flex mb-4 p-4 shadow-md rounded-2xl" key={id}>
                  <div className="w-[800px] mr-5">
                    <p className="">🟢</p>
                    <p className="font-bold text-gray-600 text-lg">{name}</p>
                    <p className="mb-1">{`₹${
                      (defaultPrice || finalPrice || price) / 100
                    }`}</p>

                    {ratings.aggregatedRating &&
                      ratings.aggregatedRating.rating && (
                        <p className="mb-2">
                          <span className="text-green-700 text-[14px] font-semibold">
                            {ratings.aggregatedRating.rating}
                          </span>
                          <span className="text-[14px]">
                            ({ratings.aggregatedRating.ratingCountV2})
                          </span>
                        </p>
                      )}

                    <p className="text-[14px] ">{description}</p>
                  </div>
                  <div className="relative">
                    <img
                      src={RES_URL + imageId}
                      alt=""
                      className="h-[170px] w-[250px] rounded-2xl object-cover"
                    />
                    <button className="px-5 py-2 bg-white text-green-600 absolute bottom-[-15px] left-[50%] translate-x-[-50%] shadow-md rounded-xl font-bold">
                      ADD
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <hr className="mt-2 mb-4" /> */}
    </div>
  );
}

export default Accord;
