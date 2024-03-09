interface Props {
  percent: number;
}

export const PercentBar = (props: Props) => {
  return (
    <div
      className="rounded-xl border-spacing-1 border-[#36364E]"
      style={{
        width: "80px",
        height: "100px",
        background: "rgb(21, 21, 24)",
        opacity: 1,
        border: "1px solid #36364E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{ height: props.percent + "%", background: "rgb(34, 197, 94)" }}
        className="flex justify-center items-center w-full rounded-xl transition-all duration-300 ease-in-out"
      >
        {props.percent > 10 && (
          <span className="text-white text-sm">
            {Math.floor(props.percent)}%
          </span>
        )}
      </div>
    </div>
  );
};
