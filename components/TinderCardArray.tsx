import React, { useEffect } from 'react'
import TinderCard from "@/components/TinderCard";

interface TinderCardArrayProps {
  eventsArray?: string[];
  num: number;
}

const TinderCardArray = ({num } : TinderCardArrayProps) => { //onClick
// async function TinderCardArray({num} : TinderCardArrayProps) {
  const eventsArray = ['history', 'hi']

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
            <TinderCard key={index} name={event} /> //onClick={onClick}
        ))
        ) : (
          <p className='text-center mx-auto'>
            You reached the end!
          </p>
        )
      }
   </div>
  )
}

export default TinderCardArray;