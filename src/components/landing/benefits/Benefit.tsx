import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
type Props = {
  reverse: boolean;
  image: any;
  heading: string;
  description: string;
  btnName: string;
};
const Benefit = (props: Props) => {
  const { reverse, image, heading, description, btnName } = props;
  return (
    <div
      className={`flex z-20 mx-0 md:mx-16 lg:mx-48 justify-center flex-col sm:flex-row ${
        reverse
          ? "flex-row-reverse lg:translate-x-[-100px]"
          : "flex-row lg:translate-x-[100px]"
      }`}
    >
      <div className="text-center flex flex-col gap-2 items-center p-4 sm:p-16">
        <div className="text-4xl font-bold">{heading}</div>
        <div className="  text-xl font-extralight min-w-[200px]">
          {description}
        </div>
        <Button variant="primary">{btnName}</Button>
      </div>
      <div className="flex justify-center items-center ">
        <Image
          src={image}
          alt="benefit"
          className="w-[400px] sm:w-[1000px] lg:w-[1500px] "
        />
      </div>
    </div>
  );
};

export default Benefit;
