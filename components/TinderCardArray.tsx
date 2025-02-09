import React, { useEffect, useState } from 'react'
import TinderCard from "@/components/TinderCard";
import { Button } from './ui/button';
import { Event } from '../models/models';

interface TinderCardArrayProps {
  eventsArray?: string[];
  setNum: (num:number) => void;
  num: number;
}

const TinderCardArray = ({num, setNum} : TinderCardArrayProps) => {
// async function TinderCardArray({num} : TinderCardArrayProps) {
  // const eventsArray = ['history', 'hi']
  const [eventsArray, setEventsArray] = useState<Event[]>([]);

  const handleEnd = () => {
    setNum(0);
  }

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("https://api.connectionhub.me/events", {
        cache: "no-store",
      });
      const data = await response.json();
      setEventsArray(data);
    };
    fetchData();
    console.log(eventsArray);
  }, [eventsArray])

  return (
    <div>
      { num < eventsArray.length ? (    
        eventsArray
          .filter((_, index) => num === index)
          .map((event, index) => (
            <TinderCard key={index}/>
            // <div key={index}>
            //   <Image src={URL.createObjectURL(event.image)} alt="img" fill/>
            // </div>
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