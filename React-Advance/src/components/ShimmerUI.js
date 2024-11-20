import React from "react";

const ShimmerCard = () => {
  const Shimmer = () => {
    return (
      <div className="w-[260px] bg-gray-200 animate-pulse rounded-2xl shadow-md m-2">
        {/* Shimmer image */}
        <div className="w-full h-[190px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:1200px_100%] animate-[shimmer_2s_infinite] rounded-t-2xl"></div>

        {/* Shimmer text */}
        <div className="p-4">
          <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-[length:1200px_100%] animate-[shimmer_2s_infinite] rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-[length:1200px_100%] animate-[shimmer_2s_infinite] rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-[length:1200px_100%] animate-[shimmer_2s_infinite] rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-[length:1200px_100%] animate-[shimmer_2s_infinite] rounded w-full mb-2"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-[length:1200px_100%] animate-[shimmer_2s_infinite] rounded w-2/3"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-evenly mt-12 mb-24 w-[1200px] mx-auto">
      {Array(16)
        .fill()
        .map((_, i) => (
          <Shimmer key={i} />
        ))}
    </div>
  );
};

export default ShimmerCard;
