import React, { useEffect, useState } from 'react'
import TinderCard from "@/components/TinderCard";
import { Event } from '../models/models';

const TinderCardList = () => {
  const [eventsArray, setEventsArray] = useState<Event[]>([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("https://api.connectionhub.me/events", {
        cache: "no-store",
      });
      const data = await response.json();
      setEventsArray(data);
    };
    fetchData();
  }, [])

  return (
    <div>
      {eventsArray.map((event, index) => (
        <TinderCard 
          key={index} 
          name={event.name} 
          time={event.time} 
          location={event.location} 
          description={event.description}
          image={event.image_id}
        />
      ))}
   </div>
  )
}

export default TinderCardList;