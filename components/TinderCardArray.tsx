import React from 'react'
import TinderCard from "@/components/TinderCard";


interface TinderCardArrayProps {
  eventsArray?: string[];
  num: number;
}

const TinderCardArray: React.FC<TinderCardArrayProps> = ({num}) => {
  const eventsArray = ['history', 'hi']

  return (
    <div>
      {eventsArray
        .filter((_, index) => index === num)
        .map((event, index) => (
          <TinderCard key={index} name={event} />
      ))}
  </div>
  )
}

export default TinderCardArray;