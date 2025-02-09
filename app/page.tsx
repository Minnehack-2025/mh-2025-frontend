'use client'

import TinderCardArray from "@/components/TinderCardArray";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { TbLayoutDistributeHorizontalFilled } from "react-icons/tb";
import { IoGameController } from "react-icons/io5";
import Preferences from "@/components/Preferences";

export default function Home() {
  const [eventNum, setEventNumb] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [layout, setLayout] = useState("Tinder");

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

  const handleToggle = () => {
    if (layout == "Tinder") {
      setLayout("Rows");
    } else {
      setLayout("Tinder")
    }
  }

  return (
    <>
      <div className='flex flex-row justify-between mb-2 w-[90vw] md:w-[70vw] mx-auto'>
        <Preferences/>
        <ToggleGroup type="single" value={layout} onValueChange={handleToggle}>
          <ToggleGroupItem value="Tinder"><IoGameController/></ToggleGroupItem>
          <ToggleGroupItem value="Rows"><TbLayoutDistributeHorizontalFilled/></ToggleGroupItem>
        </ToggleGroup>
      </div>
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
