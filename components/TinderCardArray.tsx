import React, { useEffect } from 'react'
import TinderCard from "@/components/TinderCard";
import { Button } from './ui/button';

interface TinderCardArrayProps {
  eventsArray?: string[];
  setNum: (num:number) => void;
  num: number;
}

const TinderCardArray = ({num, setNum} : TinderCardArrayProps) => {
// async function TinderCardArray({num} : TinderCardArrayProps) {
  const eventsArray = ['history', 'hi']

  const handleEnd = () => {
    setNum(0);
  }

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("https://api.connectionhub.me/events", {
        cache: "no-store",
      });
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, [])

  return (
    <div>
      { num < eventsArray.length ? (    
        eventsArray
          .filter((_, index) => num === index)
          .map((event, index) => (
            <TinderCard key={index} name={event} />
        ))
        ) : (
          <div className={`w-full h-full flex flex-col items-center py-[30vh] mb-3`}>
            <p className="text-center pb-4">You&apos;ve reached the end!</p>
            <Button onClick={handleEnd}>
              Restart
            </Button>
          </div>
        )
      }
   </div>
  )
}

export default TinderCardArray;