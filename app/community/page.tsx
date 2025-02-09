"use client";

import { Input } from "@/components/ui/input";
import TinderCardList from "@/components/TinderCardList";

export default function Community() {


  return (
    <div className="w-[90vw] md:w-[70vw] mx-auto flex flex-col gap-4 pt-2">
      <Input placeholder="Search for friends or organizations!"></Input>
      <TinderCardList/>
    </div>
  );
}
