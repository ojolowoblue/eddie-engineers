import * as React from "react";
import Image, { StaticImageData } from "next/image";

import ArrowRightIcon from "@/app/assets/svg/arrow-right.svg";

import Button from "./Button";

interface Props {
  name: string;
  description: string;
  image: StaticImageData;
}

export default function ServiceCard(props: Props) {
  const { name, description, image } = props;

  return (
    <div className="flex flex-col min-w-[474px] mobile:min-w-[286px] px-[24px] py-[20px] rounded-[20px] bg-grey33">
      <Image src={image} alt={name} />

      <div className="mt-[23px] mb-[39px] mobile:mb-[17px]">
        <h2 className="text-[2.3rem] mobile:text-[1.3rem] font-[900] max-w-[353px] mb-[7px] text-white uppercase">
          {name}
        </h2>

        <p className="max-w-[384px] text-grey98 font-medium text-[1.8rem] mobile:text-[1rem] mobile:font-[700]">
          {description}
        </p>
      </div>

      <Button
        icon={<ArrowRightIcon />}
        text="Check our service"
        className="h-[95px] mobile:h-[61px] mobile:text-[1.3rem] mobile:rounded-[15px] text-[2.3rem] font-[900] rounded-[20px] px-[37px]"
      />
    </div>
  );
}
