function RestInfo01({ cardInfo }) {
  console.log(cardInfo);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = cardInfo;
  return (
    <div className=" pt-0 p-4 mb-2 rounded-3xl bg-gradient-to-t from-gray-300">
      <h1 className="text-[22px] font-bold mb-6">{name}</h1>
      <div className="bg-white rounded-2xl border-[1px]">
        <div className="p-4 pb-0 ">
          <h2 className="font-bold mb-2">
            <span>⭐</span>{" "}
            <span>
              {avgRating}({totalRatingsString})
            </span>
            <span className="ml-2">{costForTwoMessage}</span>
          </h2>
          <p className="text-orange-600 underline font-semibold text-[14px] mb-2">
            {cuisines.join(", ")}
          </p>
          <p className="text-[14px] mb-2">
            <span className="font-bold">🏬outlet</span> {areaName}
          </p>
          <p className="text-[14px] mb-6 font-bold">
            ⌚{cardInfo.sla.minDeliveryTime}-{cardInfo.sla.maxDeliveryTime} mins
          </p>
        </div>

        <div className="border-t bg-gradient-to-r from-gray-50 to-orange-100  p-1 rounded-b-2xl">
          <h3 className="h-10 pt-2 pl-4 text-orange-400 font-extrabold text-[16px] ">
            🚲Free delivery on orders above 199
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RestInfo01;
