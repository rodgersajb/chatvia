import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { RiUser2Line, RiAttachmentLine } from "react-icons/ri";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

import Image from "next/image";

import { useState } from "react";

const Profile = () => {
  // track active through state to determine whether accordion is active

  const [active, setActive] = useState();

  // accordion data to display IF active is active

  let accordionData = [
    {
      name: "Alex Rodgers",
      email: "rodgersajb@gmail.com",
      time: "11:40 AM",
      location: "Oshawa, ON",
    },
    
  ];

  // handleActive function with index passed as variable
  //IF the index is exactly equal to active then setActive will be called
  // ELSE setActive will be called with index passed

  const handleActive = (index) => {
    if (index === active) {
      setActive();
    } else {
      setActive(index);
    }
  };
  return (
    <>
      <div className="w-[100%] flex flex-col items-center justify-between text-xs bg-customLightGrey">
        <div className="flex items-center justify-between w-[90%] py-2">
          <h2 className="text-sm text-black font-bold">My Profile</h2>
          <BiDotsVerticalRounded className="text-black" />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/alex3.jpg"
            alt="A picture of Alex who happened to develop this app!"
            width={50}
            height={50}
            className="rounded-full pt-3"
          />
          <h4>Alex Rodgers</h4>
          <div className="flex items-center justify-between w-[70%]">
            <BsFillRecordCircleFill className="text-" />
            <h5 className="">Active</h5>
          </div>
        </div>
        <p className="w-[85%] py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
          dolores culpa officia tenetur fugit excepturi placeat iste quis vitae
          saepe in quidem iure sunt beatae vero incidunt, exercitationem,
          quaerat nulla.
        </p>
        <div className="w-[90%]">
          {accordionData.map((accordion, index) => (
            <>
              <div
                className="flex justify-between items-center py-2 w-[100%] "
                key={index}
              >
                <div className="flex items-center">
                  <RiUser2Line className="mr-1" />
                  <h5>About</h5>
                </div>
                {/* Pass index as an argument to handleActive */}
                <IoChevronDown
                  onClick={() => handleActive(index)}
                  style={{
                    transform: `${
                      active === index ? "rotate(180deg)" : "rotate(0deg)"
                    }`,
                  }}
                  className="transitions duration-300 ease-out cursor-pointer"
                />
              </div>
              <div className="transition duration-300 ease-in">
                {active === index ? (
                  <div className="transition duration-300 ease-in bg-white px-2 py-2">
                    <div className="pb-2">
                      <h5 className="pb-1">Name</h5>
                      <p>{accordion.name}</p>
                    </div>
                    <div className="pb-2">
                      <h5>Email</h5>
                      <p>{accordion.email}</p>
                    </div>
                    <div className="pb-2">
                      <h5>Time</h5>
                      <p>{accordion.time}</p>
                    </div>
                    <div className="pb-2">
                      <h5>Location</h5>
                      <p>{accordion.location}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          ))}
        </div>
        <div className="flex place-items-center justify-between w-[90%]">
          <div className="flex items-center justify-evenly py-2">
            <RiAttachmentLine className="mr-1" />
            <p>Attached Files</p>
          </div>
          <IoChevronDown />
        </div>
      </div>
    </>
  );
};

export default Profile;
