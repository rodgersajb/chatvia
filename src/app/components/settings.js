import { MdModeEdit } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { RiEditFill } from "react-icons/ri";

import { useState } from "react";

const Settings = ({darkMode}) => {
  const [active, setActive] = useState();

  const handleActive = (index) => {
    if (index === active) {
      setActive();
    } else {
      setActive(index);
    }
  };

  let accordionData = [
    {
      heading: "Personal Info",
      content: {
        name: "Alex Rodgers",
        email: "rodgersajb@gmail.com",
        time: "11:40 AM",
        location: "Oshawa, ON",
      },
    },
    {
      heading: "Privacy",
      content: `We take your privacy seriously. This privacy blurb explains how we
            collect, use, and share your personal information. By using our
            service, you agree to the terms outlined in this privacy policy.
            Please read it carefully to understand our practices.`,
    },
    {
      heading: "Security",
      content: `Your security is our top priority. We are committed to ensuring the
            safety and confidentiality of your data. This security blurb
            outlines the measures we take to protect your information.`,
    },
    {
      heading: "Help",
      content: ` We're here to assist you! If you have any questions or need help
            with our service, don't hesitate to reach out.`,
    },
  ];

  return (
    <div className={`bg-customLightGrey pb-4 h-[100%] ${darkMode ? "bg-slate-800 text-white" : ""}`}>
      <h2 className="p-2 font-semibold">Settings</h2>
      <div>
        <div className=" flex items-center justify-center">
          <h5 className="p-2 bg-customPurple rounded-full relative">
            AR
            <MdModeEdit className="absolute bottom-0 right-0 bg-customGrey rounded-full p-1" />
          </h5>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h4 className="text-xs font-semibold pt-3">Alex Rodgers</h4>
          <div className="flex items-center gap-1 pb-4 pt-1">
            <h5 className="text-xs text-gray-400 font-semibold  ">Available</h5>
            <IoChevronDown className="text-xs text-gray-400 " />
          </div>
        </div>
      </div>

      <div>
        {accordionData.map((accordion, index) => (
          <>
            
              <div
                className="flex items-center justify-between w-[70%] m-auto pt-4 pb-2 "
                key={index}
              >
                <p className="text-xs font-semibold">{accordion.heading}</p>
                <IoChevronDown
                  onClick={() => handleActive(index)}
                  style={{
                    transform: `${
                      active === index ? "rotate(180deg)" : "rotate(0deg)"
                    }`,
                  }}
                  className="transitions duration-300 ease-out cursor-pointer text-gray-400 text-xs"
                />
              </div>
              <div>
                {active === index ? (
                  <div className="transition duration-300 ease-in bg-white px-2 py-2 w-[80%] m-auto rounded-sm text-xs font-semibold">
                    {typeof accordion.content === "object" ? (
                      <>
                        <div className="pb-2 ">
                          <h5 className=" text-gray-400">Name</h5>
                          <div className="flex justify-between items-center">
                            <p>{accordion.content.name}</p>
                            <span className="flex items-center bg-gray-200 p-2 rounded-sm gap-1 ">
                              <RiEditFill />
                              <p>Edit</p>
                            </span>
                          </div>
                        </div>
                        <div className="pb-2">
                          <h5 className="text-gray-400">Email</h5>
                          <p>{accordion.content.email}</p>
                        </div>
                        <div className="pb-2">
                          <h5 className="text-gray-400">Time</h5>
                          <p>{accordion.content.time}</p>
                        </div>
                        <div className="pb-2">
                          <h5 className="text-gray-400">Location</h5>
                          <p>{accordion.content.location}</p>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-400 transition duration-300 ease-in-out">{accordion.content}</p>
                    )}
                  </div>
                ) : null}
              </div>
           
          </>
        ))}
      </div>
    </div>
  );
};

export default Settings;
