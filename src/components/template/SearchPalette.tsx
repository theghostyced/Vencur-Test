import React, {type ReactNode} from "react";

function SearchPalette({children}: {children: ReactNode}) {
  return (
    <div className="flex shadow-100 rounded-lg bg-white border border-gray-300 py-[9px] px-3.5 gap-2 w-full">
      {children}
    </div>
  );
}

export default SearchPalette;
