import { RiChatVoiceFill, RiUser2Line, RiUser2Fill } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="h-full w-[5%] flex flex-col justify-between items-center">
      <div>
        <RiChatVoiceFill className="text-customPurple " />
      </div>
      <div className=" h-[40%] flex flex-col justify-evenly">
        <RiUser2Line />
        <BiMessageSquareDots />
        <TbUsers />
        <FiSettings />
      </div>
      <div>
        <BsMoon />
      </div>
    </div>
  );
};

export default Sidebar;
