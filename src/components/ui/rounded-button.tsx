export const RoundedButton = (props: {
  children: React.ReactNode | string;
  borderColor?: string;
}) => {
  return (
    <button
      className="rounded-3xl text-sm text-white flex justify-center items-center hover:bg-slate-500/20 transition-all duration-300 ease-in-out"
      style={{
        background: "#252525",
        border: `3px solid ${props.borderColor || "#36364E"}`,
        cursor: "pointer",
        width: "110px",
        height: "40px",
      }}
    >
      {props.children}
    </button>
  );
};
