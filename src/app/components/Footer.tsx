import * as React from "react";
import Link from "next/link";

import Logo from "@/app/assets/svg/logo.svg";
import Instagram from "@/app/assets/svg/instagram.svg";
import Twitter from "@/app/assets/svg/twitter.svg";
import LinkedIn from "@/app/assets/svg/linkedin.svg";
import Tiktok from "@/app/assets/svg/tiktok.svg";
import Copyright from "@/app/assets/svg/copyright.svg";
import CopyrightBig from "@/app/assets/svg/copyright-big.svg";

import { companyLinks, serviceLinks } from "../utils";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#9F9F9F] pt-[116px] pb-[79px] tablet:pt-[85px] mx-auto max-w-[1920px]">
      <div className="flex px-[2.5%] tablet:flex-col tablet:px-[17px]">
        <Logo className="mr-[96px]" />

        <div className="flex-1 flex justify-around tablet:flex-col tablet:mt-[38px] tablet:gap-[53px]">
          <div>
            <h2 className="text-[2.2rem] font-[900] text-white mb-[32px] tablet:text-[1.7rem]">
              OUR SERVICE
            </h2>
            <ul className="flex flex-col gap-[23px]">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-[2.2rem] font-medium text-white tablet:text-[1.7rem] flex items-center gap-[16px]"
                    href={link.href}
                  >
                    {link.name}

                    {link.name === "Follow Us" && (
                      <div className="flex items-center gap-[12px]">
                        <Instagram />
                        <Twitter />
                        <LinkedIn />
                        <Tiktok />
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[2.2rem] font-[900] text-white mb-[32px] tablet:text-[1.7rem]">
              COMPANY
            </h2>
            <ul className="flex flex-col gap-[23px]">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-[2.2rem] font-medium text-white tablet:text-[1.7rem]"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="tablet:hidden"></div>
        </div>
      </div>

      <hr className="border mx-[2.5%] mt-[73px] border-[#9F9F9F]" />

      <h2 className="font-bold text-[2.2rem] flex gap-2 items-center justify-center text-white text-center mt-[50px] tablet:text-[1.3rem]">
        <CopyrightBig className="tablet:hidden" />
        <Copyright className="hidden tablet:block" />
        <span>2023 EDDIE ENGINEER | POWERED BY POWERSHOP.LINK</span>
      </h2>
    </footer>
  );
}
