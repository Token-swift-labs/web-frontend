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
      className={`flex z-20 mx-64 justify-center ${
        reverse
          ? "flex-row-reverse translate-x-[-100px]"
          : "flex-row translate-x-[100px]"
      }`}
    >
      <div className="text-center flex flex-col gap-2 items-center p-16">
        <div className="text-4xl font-bold">{heading}</div>
        <div className="  text-xl font-extralight">{description}</div>
        <Button variant="primary">{btnName}</Button>
      </div>
      <div className="flex justify-center items-center">
        <Image src={image} alt="benefit" width={1500} />
      </div>
    </div>
  );
};

export default Benefit;
