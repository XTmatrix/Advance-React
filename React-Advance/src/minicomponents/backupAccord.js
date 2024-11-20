import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./accordstyle.css";
import { RES_URL } from "../utils/constants";

function Accord({ cardInfo }) {
  return (
    <div>
      <div className="recommended">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="border-0">
            <Accordion.Header className="accord-header">
              <h2 className="font-bold text-[18px]">({cardInfo.length})</h2>
            </Accordion.Header>
            <Accordion.Body>
              {cardInfo.map((data) => {
                // const ImageId = data.card.info.imageId;
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
                    <hr className=" border-8 bg-gray-100 mt-10" />
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr className=" border-8 bg-gray-100 mt-10" />
      </div>
    </div>
  );
}

export default Accord;
