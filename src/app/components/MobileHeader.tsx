"use client";

import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import Logo from "@/app/assets/svg/logo-small.svg";
import SearchIcon from "@/app/assets/svg/search-white.svg";
import HamburgerIcon from "@/app/assets/svg/hamburger.svg";
import CloseIcon from "@/app/assets/svg/close.svg";
import ArrowRight from "@/app/assets/svg/arrow-right.svg";

import { links } from "../utils";
import SearchBox from "./SearchBox";

export default function MobileHeader() {
  const [openSearch, setSearch] = React.useState(false);
  const [openMenu, setMenu] = React.useState(false);

  React.useEffect(() => {
    if (openMenu) {
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      document.documentElement.style.overflow = "scroll";
    };
  }, [openMenu]);

  return (
    <div>
      <header className="hidden h-[62px] w-full tablet:flex items-center justify-between bg-dark">
        <Logo />

        <div className="flex items-center gap-[14px]">
          <SearchIcon
            role="button"
            onClick={() => setSearch((prev) => !prev)}
          />

          <HamburgerIcon
            role="button"
            onClick={() => setMenu((prev) => !prev)}
          />
        </div>
      </header>

      <Links className={`${openMenu ? "open" : ""}`}>
        <div className="flex justify-between">
          <p className="text-[1.6rem] font-medium pb-[18px] text-dark05">
            Menu
          </p>

          <CloseIcon role="button" onClick={() => setMenu(false)} />
        </div>

        {links.map((link) => (
          <li key={link.name}>
            <Link className="flex items-center gap-2" href={link.href}>
              <span className="text-dark05 text-[2.8rem] font-[900]">
                {link.name}
              </span>

              <ArrowRight stroke="#000" />
            </Link>
          </li>
        ))}
      </Links>

      <SearchWrapper className={`${openSearch ? "open" : ""}`}>
        <SearchBox />
      </SearchWrapper>

      <Overlay className={`${openMenu ? "open" : ""}`} />
    </div>
  );
}

const Links = styled.ul`
  background-color: #fff;
  position: absolute;
  left: 0;
  width: 100%;
  top: -500px;
  display: flex;
  padding: 51px 0;
  padding-left: 27px;
  padding-right: 17px;
  flex-direction: column;
  gap: 18px;
  z-index: 200;
  transition: all 500ms ease-in-out;

  &.open {
    transform: translateY(500px);
  }
`;

const SearchWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 500ms ease-in-out;

  &.open {
    height: 60px;
    padding: 10px 0;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  top: -100vh;
  display: flex;
  padding: 51px 0;
  padding-left: 27px;
  padding-right: 17px;
  flex-direction: column;
  gap: 18px;
  z-index: 150;

  &.open {
    transform: translateY(100vh);
  }
`;
