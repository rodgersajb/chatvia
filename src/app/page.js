'use client'
import { config } from "dotenv";
config();


import Sidebar from "./components/sidebar";
import Conversations from "./components/conversations";


export default function Home() {

  

  return (
    
    
    <div className="min-h-screen h-screen flex font-sans">
      
      <Sidebar />
      
     
    </div>
    
  );
  }
  


