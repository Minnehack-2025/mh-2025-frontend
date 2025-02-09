'use client'

import TinderCardArray from "@/components/TinderCardArray";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Home() {
  const [eventNum, setEventNumb] = useState(0);

  const handleNo = () => {
    setEventNumb(eventNum + 1);
  }

  const handleYes = () => {
    
  }

  return (
    <div>
      <TinderCardArray num={eventNum}/>
      <div className="flex flex-row justify-between w-[60vw] mx-auto mt-4"> 
        <button onClick={handleNo}>
          <AiFillCloseCircle size={80}/>
        </button>
        <button onClick={handleYes}>
          <AiFillCheckCircle size={80}/>
        </button>
      </div>
    </div>
  );
}
