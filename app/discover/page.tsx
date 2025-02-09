"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TinderCardArray from "@/components/TinderCardArray";
import { Button } from "@/components/ui/button";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function DiscoverPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [eventNum, setEventNumb] = useState(0);
  const [isHidden, setIsHidden] = useState(true);


  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated" || !session) {
      router.replace("/login");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // ✅ Display loading state while checking session
  }

  return (
    <>
      {session ? (
        isHidden ? (
          <>
            <div className="w-[70vw] h-[90vw] max-h-[75vh]">
              <TinderCardArray index={eventNum} />
            </div>
            <div className="flex flex-row justify-between w-[60vw] mx-auto mt-4">
              <button onClick={() => setEventNumb(eventNum + 1)}>
                <AiFillCloseCircle size={80} />
              </button>
              <button onClick={() => setIsHidden(false)}>
                <AiFillCheckCircle size={80} />
              </button>
            </div>
          </>
        ) : (
          <div className={`w-full h-full flex flex-col items-center bg-white`}>
            <p className="text-center">You are registered!</p>
            <Button onClick={() => { setIsHidden(true); setEventNumb(eventNum + 1); }}>
              Next
            </Button>
          </div>
        )
      ) : null}
    </>
  );
}
