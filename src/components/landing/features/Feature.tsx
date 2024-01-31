import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
type Props = {
  heading: string;
  description: string;
  bgImage: any;
  btnName: string;
};
const Feature = (props: Props) => {
  const { heading, description, bgImage, btnName } = props;
  return (
    <div className="rounded-[30px] border-2 border-[#2F2F2F] bg-[#171717] relative flex flex-col gap-4 items-center w-[350px] h-[350px] p-8">
      <div className="text-4xl font-bold z-20">{heading}</div>
      <div className="text-center font-[18px] z-20">{description}</div>
      <div className="w-full h-full bg-[#151527]/50 absolute top-0 left-0 z-10 rounded-[30px]"></div>
      <Image
        src={bgImage}
        alt="ee"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0"
      />
      <Button className="z-20" variant="primary">
        {btnName}
      </Button>
    </div>
  );
};

export default Feature;
