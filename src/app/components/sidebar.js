import { RiChatVoiceFill, RiUser2Line, RiUser2Fill } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";

import { useState } from "react";

import Profile from "./profile";
import Chats from "./chats";
import Settings from "./settings";

const Sidebar = () => {

    // track the active tab through state

    const [activeTab, setActiveTab] = useState('');

    // handleClick function with parameter passed
        // click sets the active tab to the parameter that was passed in
        // the three tab options for this will be profile, settings and users
    
    // inline anonymous functions are then used to call the handleClick function that updates the activeTab

    const handleTabClick = (tracked) => {
        setActiveTab(tracked)
    }
  return (
    <>
    <div className="h-full w-[5%] flex flex-col justify-between items-center py-2">
      <div>
        <RiChatVoiceFill className="text-customPurple " />
      </div>
      <div className=" h-[40%] flex flex-col justify-evenly">
        <RiUser2Line onClick={() => handleTabClick('profile')} className="hover:text-customPurple cursor-pointer"/>
        <BiMessageSquareDots onClick={() => handleTabClick('chats')} className="hover:text-customPurple cursor-pointer"/>
        <TbUsers className="hover:text-customPurple"/>
        <FiSettings onClick={() => handleTabClick('settings')} className="hover:text-customPurple cursor-pointer"/>
      </div>
      <div>
        <BsMoon className=""/>
      </div>
    </div>
    <div>
        {activeTab === 'profile'  && <Profile />}
        {activeTab === 'chats' && <Chats />}
        {activeTab === 'settings' && <Settings />}
    </div>
    </>
  );
};

export default Sidebar;
