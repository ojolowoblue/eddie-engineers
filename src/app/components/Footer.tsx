import * as React from "react";
import Link from "next/link";

import Logo from "@/app/assets/svg/Logo.svg";
import Instagram from "@/app/assets/svg/instagram.svg";
import Twitter from "@/app/assets/svg/twitter.svg";
import LinkedIn from "@/app/assets/svg/linkedin.svg";
import Tiktok from "@/app/assets/svg/tiktok.svg";

import { companyLinks, serviceLinks } from "../utils";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#9F9F9F] pt-[116px] pb-[79px] mobile:pt-[85px]">
      <div className="flex px-[2.5%] mobile:flex-col mobile:px-[17px]">
        <Logo className="mr-[96px]" />

        <div className="flex-1 flex justify-around mobile:flex-col mobile:mt-[38px] mobile:gap-[53px]">
          <div>
            <h2 className="text-[2.2rem] font-[900] text-white mb-[32px] mobile:text-[1.7rem]">
              OUR SERVICE
            </h2>
            <ul className="flex flex-col gap-[23px]">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-[2.2rem] font-medium text-white mobile:text-[1.7rem] flex items-center gap-[16px]"
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
            <h2 className="text-[2.2rem] font-[900] text-white mb-[32px] mobile:text-[1.7rem]">
              COMPANY
            </h2>
            <ul className="flex flex-col gap-[23px]">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-[2.2rem] font-medium text-white mobile:text-[1.7rem]"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile:hidden"></div>
        </div>
      </div>

      <hr className="border mx-[2.5%] mt-[73px] border-[#9F9F9F]" />

      <h2 className="font-bold text-[2.2rem] text-white text-center mt-[50px] mobile:text-[1.3rem]">
        2023 EDDIE ENGINEER | POWERED BY POWERSHOP.LINK
      </h2>
    </footer>
  );
}
