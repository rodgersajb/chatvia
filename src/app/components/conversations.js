import { useState } from "react";
import axios from "axios";

import { BsFillRecordCircleFill, BsThreeDots } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { MdInsertEmoticon } from "react-icons/md";
import { RiAttachmentLine, RiSendPlane2Fill } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";

import classNames from "classnames";

const Conversations = () => {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChat) => [
      ...prevChat,
      { type: "user", message: userInput, timestamp: new Date() },
    ]);
    sendMessage(userInput);
    setUserInput("");
  };

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    setLoading(true);

    axios.post(url, data, { headers: headers }).then((response) => {
      console.log(response);
      setChatLog((prevChat) => [
        ...prevChat,
        { type: "bot", message: response.data.choices[0].message.content, timestamp: new Date() },
      ]);
      setLoading(false);
    });
  };
  return (
    <>
      <div className="w-[100%] py-1">
        <div className="flex justify-between items-center w-[100%] px-2">
          <div className="flex items-center justify-evenly">
            <span></span>
            <h5>Doris Brown</h5>
            <BsFillRecordCircleFill />
          </div>
          <div className="flex justify-evenly w-[20%]">
            <BiSearch />
            <FiPhone />
            <AiOutlineVideoCamera />
            <TbUsers />
            <BsThreeDots />
          </div>
        </div>
        <div className="h-[90%] flex flex-col overflow-y-scroll">
          {chatLog.map((message, index) => {
            const messageClass = classNames("message", {
              "user-message": message.type === "user",
              "bot-message flex justify-end": message.type === "bot",
            });

           
            return (
              <div key={index} className={messageClass}>
                <h3
                  className={`text-sm flex flex-col ${
                    message.type === "user"
                      ? "bg-customPurple text-white ml-4 w-[50%]"
                      : "bg-gray-200 mt-10 flex justify-start w-[50%] overflow-hidden "
                  } max-w-max p-2 rounded-sm mr-4 `}
                >
                  {message.message}
                  <span className={`flex items-center gap-1 text-xs ${message.type === "user" ? "text-white justify-end" : "text-gray-400 justify-start" } `}><CiClock2 className="text-xs" />{new Date(message.timestamp).toLocaleTimeString()}</span>
                </h3>
              </div>
            );
          })}
        </div>
        <div className="fixed w-[80%] mb-1 bg-white">
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-[100%] px-2"
          >
            <input
              type="text"
              placeholder="Enter Message..."
              onChange={(e) => setUserInput(e.target.value)}
              className="w-[85%] bg-gray-300 p-1 rounded-md"
            />
            <div className="w-[15%] flex gap-1 justify-evenly items-center py-2">
              <MdInsertEmoticon className="text-customPurple" />
              <RiAttachmentLine className="text-customPurple" />
              <button
                onClick={() => handleSubmit}
                className="bg-customPurple h-[100%] rounded-md p-2"
              >
                <RiSendPlane2Fill className="text-l h-[100%] text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Conversations;
