import React from "react";

interface AvatarsProps {
  srcset: string[];
}

//Avatar (5).svg

function Avatars({srcset}: AvatarsProps) {
  return (
    <div className="inline-flex ml-2">
      {srcset.map((value, index) => (
        <button
          type="button"
          className=""
          style={{
            marginLeft: -(index + 8),
          }}
          key={index}
        >
          <img className="w-7 h-7" src={value} alt="" />
        </button>
      ))}
      {srcset.length >= 5 && (
        <button
          type="button"
          style={{
            marginLeft: -10,
          }}
          className="relative flex items-center justify-center"
        >
          <img src="/images/Avatar (7).svg" alt="" />
          <span className="absolute text-sm font-medium text-gray-600">+4</span>
        </button>
      )}
    </div>
  );
}

export default Avatars;
