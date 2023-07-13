import { useState } from "react";
import axios from "axios";

import { BsFillRecordCircleFill, BsThreeDots } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";



const Conversations = () => {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChat) => [
      ...prevChat,
      { type: "user", message: userInput },
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
        { type: "bot", message: response.data.choices[0].message.content },
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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Message..."
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button>submit</button>
        </form>
        {chatLog.map((message, index) => {
          return <div key={index}>{message.message}</div>;
        })}
      </div>
    </>
  );
};

export default Conversations;
