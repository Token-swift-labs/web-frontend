import Image from "next/image";
import logo from "../../../public/logo.svg";
import discordIcon from "../../../public/discord.svg";
const Footer = () => {
  return (
    <div className="w-full z-30 relative mt-[350px]">
      <div className="flex justify-between w-full bg-footer_blue p-4">
        <div className="flex ">
          <div className="flex items-center justify-center ">
            <Image src={logo} alt="logo" width={170} />
          </div>
          <div className="flex flex-col justify-center  ml-8 gap-1">
            <div className="text-text_dimmed text-xl font-semibold hover:text-white">
              How it works
            </div>
            <div className="text-text_dimmed text-xl font-semibold hover:text-white">
              FAQ
            </div>
            <div className="text-text_dimmed text-xl font-semibold hover:text-white">
              Feedback
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between  items-end">
          <button>
            <Image src={discordIcon} alt="discord" />
          </button>
          <div className="flex flex-col items-end mt-4">
            <div className="text-text_dimmed text-md  hover:text-white">
              Privacy policy
            </div>
            <div className="text-text_dimmed text-md  hover:text-white">
              Terms
            </div>
            <div className="text-text_dimmed text-md hover:text-white">
              ©2024 - Token Swift. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10px] bg-gradient-to-r from-blue-600 to-purple-600"></div>
    </div>
  );
};
export default Footer;
