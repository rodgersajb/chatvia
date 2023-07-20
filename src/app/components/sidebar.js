import { RiChatVoiceFill, RiUser2Line, RiUser2Fill } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BsMoon, BsFillSunFill, BsSunFill } from "react-icons/bs";
import Conversations from "./conversations";

import { useState } from "react";

import Profile from "./profile";
import Chats from "./chats";
import Settings from "./settings";

const Sidebar = () => {
  // track the active tab through state

  const [activeTab, setActiveTab] = useState("");

  // tracking dark mode through state

  const [darkMode, setDarkMode] = useState(false);

  // handleClick function with parameter passed
  // click sets the active tab to the parameter that was passed in
  // the three tab options for this will be profile, settings and users

  // inline anonymous functions are then used to call the handleClick function that updates the activeTab

  const handleTabClick = (tracked) => {
    setActiveTab(tracked);
  };

  // toggle function when called sets dark mode to not dark mode

  const toggleMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <>
      <div
        className={`h-screen w-[5%] flex flex-col justify-between items-center py-2 ${
          darkMode ? "bg-slate-900 text-white" : "bg-white"
        }`}
      >
        <div>
          <RiChatVoiceFill className="text-customPurple" />
        </div>
        <div className="h-[40%] flex flex-col justify-evenly">
          <RiUser2Line
            onClick={() => handleTabClick("profile")}
            className={`hover:text-customPurple cursor-pointer ${
              activeTab === "profile" ? "text-customPurple" : ""
            }`}
          />
          <BiMessageSquareDots
            onClick={() => handleTabClick("chats")}
            className={`hover:text-customPurple cursor-pointer ${
              activeTab === "chats" ? "text-customPurple" : ""
            }`}
          />
          <TbUsers
            onClick={() => handleTabClick("users")}
            className={`hover:text-customPurple cursor-pointer ${
              activeTab === "users" ? "text-customPurple" : ""
            }`}
          />
          <FiSettings
            onClick={() => handleTabClick("settings")}
            className={`hover:text-customPurple cursor-pointer ${
              activeTab === "settings" ? "text-customPurple" : ""
            }`}
          />
        </div>
        <div>
          {darkMode ? (
            <BsSunFill onClick={toggleMode} className="cursor-pointer text-yellow-400" />
          ) : (
            <BsMoon onClick={toggleMode} className="cursor-pointer" />
          )}
        </div>
      </div>
      <div className="w-[20%]">
        {activeTab === "profile" && <Profile />}
        {activeTab === "chats" && <Chats />}
        {/* {activeTab === "users" && <Users />} */}
        {activeTab === "settings" && <Settings darkMode={darkMode} />}
      </div>
      <Conversations darkMode={darkMode}/>
    </>
  );
};

export default Sidebar;
