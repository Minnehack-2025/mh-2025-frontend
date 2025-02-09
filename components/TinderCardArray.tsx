import React from 'react'
import TinderCard from "@/components/TinderCard";


interface TinderCardArrayProps {
  eventsArray?: string[];
  num: number;
}

const TinderCardArray = ({num} : TinderCardArrayProps) => {
// async function TinderCardArray({num} : TinderCardArrayProps) {
  const eventsArray = ['history', 'hi']
  // const response = await fetch("https://api.connectionhub.me/events", {
  //   cache: "no-store",
  // });
  // const data = await response.json();

  return (
    <div>
      { num < eventsArray.length ? (    
        eventsArray
          .filter((_, index) => num === index)
          .map((event, index) => (
            <TinderCard key={index} name={event} />
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