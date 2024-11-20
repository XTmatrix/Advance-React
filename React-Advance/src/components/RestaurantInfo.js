import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../customHooks/useRestaurantInfo";
import RestInfo01 from "../minicomponents/RestInfo01";
import RestInfo02 from "../minicomponents/RestInfo02";
// import RestInfo03 from "../minicomponents/RestInfo03";

const RestaurantInfo = () => {
  const { id } = useParams();
  const resInfo = useRestaurantInfo(id);

  if (!resInfo) return <div className="text-center">Loading...</div>;

  const restInfo01 = resInfo.cards[2].card.card.info;
  const restInfo02 =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .carousel;
  const cardsArray = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  console.log(cardsArray);

  return (
    <div className=" w-[1000px] m-auto ">
      <RestInfo01 cardInfo={restInfo01} />
      {restInfo02 && <RestInfo02 cardInfo={restInfo02} />}
      {/* <RestInfo03 cardInfo={cardsArray} /> */}
    </div>
  );
};

export default RestaurantInfo;
