"use client";

import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import Logo from "@/app/assets/svg/Logo.svg";

import SearchBox from "./SearchBox";
import MobileHeader from "./MobileHeader";
import { links } from "../utils";

export default function Header() {
  return (
    <>
      <header className="h-[62px] flex items-center justify-between bg-dark tablet:hidden">
        <Logo />

        <Links>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                className="text-white text-[2rem] font-bold inline-block"
                href={link.href}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </Links>

        <SearchBox />
      </header>

      <MobileHeader />
    </>
  );
}

const Links = styled.ul`
  display: flex;
  gap: 38px;
`;

const NavLink = styled(Link)`
  &::after {
    content: "";
    width: 0px;
    height: 2px;
    display: block;
    background: #fff;
    transition: 300ms;
  }

  &:hover::after {
    width: 100%;
  }
`;
