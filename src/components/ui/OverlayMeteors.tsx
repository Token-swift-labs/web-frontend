import { Meteors } from "./meteors";
type Props = {
  isOpen: boolean;
};
const OverlayMeteors = ({ isOpen }: Props) => {
  return (
    <div
      className={`absolute top-0 left-0 w-[100vw] h-[100vh] z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <Meteors number={25} />
    </div>
  );
};
export default OverlayMeteors;
