"use client";
import Image from "next/image";

import HeroImage from "@/app/assets/images/hero-image.png";
import HeroImageMobile from "@/app/assets/images/here-image-mobile.png";
import ChevronLeft from "@/app/assets/svg/swipe-left.svg";
import ChevronRight from "@/app/assets/svg/swipe-right.svg";

import Header from "./components/Header";
import Button from "./components/Button";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import { services } from "./utils";

export default function Home() {
  return (
    <>
      <main className="relative px-[2.5%] mobile:px-[17px] bg-dark tablet:px-[17px] mx-auto max-w-[1920px] pt-[46px]">
        <Header />

        <section className="relative flex flex-col justify-end h-[839px] tablet:h-[605px] mt-[48px] tablet:mt-[22px] bg-dark">
          <div className="text-white z-40 px-[54px] tablet:px-[38px] mb-[67px] tablet:mb-[35px]">
            <h1 className="text-[7.9rem] font-[900] max-w-[595px] tablet:text-[3.5rem]">
              Eddie Engineer Store
            </h1>

            <p className="text-[2.4rem] font-medium max-w-[527px] tablet:text-[1.5rem]">
              We are helping you with all your engineering need
            </p>

            <Button className="w-[305px] rounded-[20px] h-[95px] mt-[25px] text-[3.1rem] tablet:w-[176px] px-[39px] text-dark tablet:text-[1.8rem] tablet:h-[56px] tablet:px-[16px] tablet:rounded-[12px]">
              Learn more
            </Button>
          </div>

          <Image
            src={HeroImage}
            alt="Engineer Lady"
            className="absolute top-0 h-full w-full z-20 tablet:hidden"
          />

          <Image
            src={HeroImageMobile}
            alt="Engineer Lady"
            className="absolute top-0 h-full w-full hidden z-20 tablet:block"
          />

          <div className="absolute top-0 h-full w-full bg-transparentDark z-30" />
        </section>

        <section className="my-[80px]">
          <div className="flex items-center justify-between mb-[46px]">
            <h1 className="text-[4.3rem] mobile:text-[2.8rem] font-[900] text-white">
              Our Service
            </h1>

            <div className="flex items-center">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </div>

          <div className="flex gap-[32px] mobile:gap-[20px] overflow-x-auto no-scrollbar">
            {services.map((service, idx) => (
              <ServiceCard
                name={service.name}
                description={service.description}
                image={service.image}
                key={idx.toString()}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
