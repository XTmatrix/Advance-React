import React from "react";
import { RES_URL } from "../utils/constants";

function RestInfo02({ cardInfo }) {
  return (
    <div className="p-2 mb-4">
      <h2 className="text-[22px] font-bold mb-6">Top picks</h2>
      <div className=" mb-4 flex flex-wrap justify-center">
        {cardInfo.map((data) => {
          const { imageId, price, defaultPrice, finalPrice, id } =
            data.dish.info;
          console.log(data.dish.info);

          return (
            <div key={id}>
              <div className="relative m-2 mb-4">
                <div>
                  <img
                    src={RES_URL + imageId}
                    alt="Top Pick"
                    className="w-[300px] h-[250px] object-cover rounded-2xl shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-2xl"></div>
                </div>
                <p className="absolute bottom-5 left-5 text-white font-bold">
                  ₹{(defaultPrice || finalPrice || price) / 100}
                </p>
                <button className="absolute bottom-3 right-5 font-extrabold text-green-500 bg-white px-4 py-2 rounded-md">
                  ADD
                </button>
              </div>
            </div>
          );
        })}

        {/* <img
          src={RES_URL + cardInfo[0].dish.info.imageId}
          alt="Top Pick"
          className="w-400 h-[300px] object-cover rounded-2xl"
        /> */}
        <p></p>
      </div>
      <hr className=" border-8 bg-gray-100" />
    </div>
  );
}

export default RestInfo02;
