'use client'
import { config } from "dotenv";
config();

import { useState } from "react";
import axios from "axios";
import Sidebar from "./components/sidebar";


export default function Home() {

  const [userInput, setUserInput] = useState('')
  const [chatLog, setChatLog] = useState([])
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setChatLog((prevChat) => [...prevChat, {type: 'user', message: userInput}]) 
    sendMessage(userInput)
    setUserInput('')
  }

  const sendMessage = (message) => {
      const url = 'https://api.openai.com/v1/chat/completions';

      const headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      };

      const data = {
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": message}]
      }

      setLoading(true);

      axios.post(url, data, { headers: headers}).then((response) => {
        console.log(response)
        setChatLog((prevChat) => [...prevChat, { type: 'bot', message: response.data.choices[0].message.content}])
        setLoading(false)
      })

  }
  

  return (
    <div className="min-h-screen h-screen bg-gray-200">
      
      <Sidebar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="hey hat...."
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>submit</button>
      </form>
      {chatLog.map((message, index) => {
        return <div key={index}>{message.message}</div>;
      })}
    </div>
  );
}
