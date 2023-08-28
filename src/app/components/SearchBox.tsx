import * as React from "react";

import SearchIcon from "@/app/assets/svg/search.svg";
import CloseIcon from "@/app/assets/svg/close-circle.svg";

export default function SearchBox() {
  return (
    <div className="h-[48px] flex items-center gap-[5px] bg-grey33 px-[18px] rounded-[48px] min-w-[266px]">
      <SearchIcon />

      <input
        placeholder="Search"
        className="h-full flex-1 text-white text-[2rem] outline-none border-0 bg-grey33 placeholder:font-bold placeholder:text-[1.4rem] placeholder:text-greyBC"
      />

      <CloseIcon role="button" />
    </div>
  );
}
