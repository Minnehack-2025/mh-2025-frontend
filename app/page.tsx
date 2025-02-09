'use client'

import TinderCardArray from "@/components/TinderCardArray";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Home() {
  const [eventNum, setEventNumb] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const handleNo = () => {
    setEventNumb(eventNum + 1);
  }

  const handleYes = () => {
    setIsHidden(false);
  }

  const handleCongratsClose = () => {
    setIsHidden(true);
    setEventNumb(eventNum + 1);
  }

  return (
    <>
      {isHidden ? (
        <>
          <div>
            <TinderCardArray num={eventNum}/>
          </div>
          <div className="flex flex-row justify-between w-[60vw] mx-auto mt-4"> 
            <button onClick={handleNo}>
              <AiFillCloseCircle size={80}/>
            </button>
            <button onClick={handleYes}>
              <AiFillCheckCircle size={80}/>
            </button>
          </div>
        </>
      ) : (
        <div className={`w-full h-full flex flex-col items-center bg-white ${isHidden ? 'hidden' : ''}`}>
          <p className="text-center">You are registered!</p>
          <Button onClick={handleCongratsClose}>
            Next
          </Button>
        </div>
      )}
    </>
  );
}
