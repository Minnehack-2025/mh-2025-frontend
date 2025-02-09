"use client";

import TinderCardArray from "@/components/TinderCardArray";
import { Button } from "@/components/ui/button";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TbLayoutDistributeHorizontalFilled } from "react-icons/tb";
import { IoGameController } from "react-icons/io5";
import Preferences from "@/components/Preferences";
import Image from "next/image";
import Profile from "@/images/ss.png";

export default function DiscoverPage() {
  const [eventNum, setEventNum] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [layout, setLayout] = useState("Tinder");
  const [onAddFriend, setOnAddFriend] = useState(false);
  const [liveVotingNum, setLiveVotingNum] = useState("");
  const [liveVotingText, setLiveVotingText] = useState("Live Voting");
  const [isLiveVoting, setIsLiveVoting] = useState(false);
  const [isLiveVotingVisible, setIsLiveVotingVisible] = useState(false);

  const handleNo = () => {
    setEventNum(eventNum + 1);
  }

  const handleYes = () => {
    setIsHidden(false);
    if (isLiveVoting) {
      setLiveVotingNum("2/2 voted");
    }
  }

  const handleCongratsClose = () => {
    setIsHidden(true);
    setEventNum(eventNum + 1);
    setIsLiveVotingVisible(false);
  }

  const handleToggle = () => {
    setLayout(layout === "Tinder" ? "Rows" : "Tinder");
  }

  const handleSelectFriend = (added: boolean) => {
    setOnAddFriend(added);
    setIsLiveVotingVisible(true);
  }

  const handleLiveVote = () => {
    setLiveVotingNum("0/2 voted");
    setIsLiveVoting(!isLiveVoting);
    setIsLiveVotingVisible(true);
    if (!isLiveVoting) {
      setLiveVotingText("End Live Vote");
    } else {
      setLiveVotingText("Live Voting")
      setLiveVotingNum("")
    }
  }

  return (
    <div>
      {onAddFriend && isHidden && isLiveVotingVisible && (
        <div className="w-full flex justify-between py-2 mb-2 bg-gray-200 px-[5vw] md:px-[15vw]">
          <div className="flex flex-row gap-2 items-center">
            <Image src={Profile} alt="Profile Picture" className='rounded-full w-8 h-8'></Image>
            <Image src={Profile} alt="Profile Picture" className='rounded-full w-8 h-8'></Image>
          </div>
          <div className="flex flex-row gap-4 items-center">
            {liveVotingNum}
            <Button 
              onClick={handleLiveVote}
            >
              {liveVotingText}
            </Button>
          </div>
        </div>)
      }

      {isHidden && (<div className="flex flex-row justify-between mb-2 w-[90vw] md:w-[70vw] mx-auto">
          <Preferences onFriendSelect={handleSelectFriend}/>
          <ToggleGroup type="single" value={layout} onValueChange={handleToggle}>
            <ToggleGroupItem value="Tinder">
              <IoGameController />
            </ToggleGroupItem>
            <ToggleGroupItem value="Rows">
              <TbLayoutDistributeHorizontalFilled />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      )}
      {isHidden ? (
        <div>
          <div>
            <TinderCardArray num={eventNum} setNum={setEventNum}/>
          </div>
          <div className="flex flex-row justify-between w-[60vw] mx-auto mt-4">
            <button onClick={handleNo}>
              <AiFillCloseCircle size={80} />
            </button>
            <button onClick={handleYes}>
              <AiFillCheckCircle size={80} />
            </button>
          </div>
        </div>
      ) : (
        <div className={`w-full h-full flex flex-col items-center py-[30vh] bg-white ${isHidden ? 'hidden' : ''}`}>
          <p className="text-center pb-4">You are registered!</p>
          <Button onClick={handleCongratsClose}>
            Next
          </Button>
        </div>
      )}
  </div>
  );
}