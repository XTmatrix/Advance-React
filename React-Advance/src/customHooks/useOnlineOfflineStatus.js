import { useState, useEffect } from "react";

const useOnlineOfflineStatus = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  return online;
};

export default useOnlineOfflineStatus;
