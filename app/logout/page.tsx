"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        router.push("/login");
      } else {
        console.error("Failed to log out", response.status, response.statusText);
      }
    };

    logout();
  }, [router]);

  return <div>Logging out...</div>;
};

export default Logout;