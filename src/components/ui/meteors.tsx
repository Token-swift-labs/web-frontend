import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { memo, useEffect } from "react";

const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  // const meteors = new Array(number || 20).fill(true);
  const [meteors, setMeteors] = React.useState<
    { left: string; animationDelay: string; animationDuration: string }[]
  >([]);
  useEffect(() => {
    for (let i = 0; i < (number || 20); i++) {
      setMeteors((prev) => [
        ...prev,
        {
          left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
          animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
          animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
        },
      ]);
    }
  }, []);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-blue-400 shadow-[0_0_0_1px_#6d28d910] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#4854ff] before:to-transparent",
            className
          )}
          style={{
            top: -10,
            left: el.left,
            animationDelay: el.animationDelay,
            animationDuration: el.animationDuration,
          }}
        ></span>
      ))}
    </>
  );
};
export default memo(Meteors);
