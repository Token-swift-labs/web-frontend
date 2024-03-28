import { useEffect, useRef } from "react";

export const RoundedButton = (props: {
  children: React.ReactNode | string;
  borderColor?: string;
  notifications?: number;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      className="rounded-3xl text-sm text-white flex justify-center items-center hover:bg-slate-500/20 transition-all duration-300 ease-in-out"
      style={{
        background: "#252525",
        border: `3px solid ${props.borderColor || "#36364E"}`,
        cursor: "pointer",
        minWidth: "110px",
        padding: "0 16px",
        height: "40px",
        position: "relative",
      }}
    >
      <>
        {!!props.notifications && (
          <div
            className="absolute z-10 rounded-full bg-red-600 right-[-10px] top-[-10px]"
            style={{ padding: "0px 7px" }}
          >
            {props.notifications}
          </div>
        )}
        {props.children}
      </>
    </button>
  );
};
