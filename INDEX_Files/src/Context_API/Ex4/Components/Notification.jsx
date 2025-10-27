import { useEffect } from "react";

const Notification = () => {
  useEffect(() => {
    document.cookie = "visited=true; max-age=3600; path=/";
    console.log("Cookie set ✅");

    return () => {
      document.cookie =
        "visited=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };
  }, []);

  return (
    <div className="p-3 text-center text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-900 dark:text-yellow-300">
      🍪 We use cookies for a smoother journaling experience.
    </div>
  );
};

export default Notification;
