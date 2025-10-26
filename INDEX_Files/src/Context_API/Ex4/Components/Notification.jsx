import { useEffect } from "react";

const Notification = ()=>{

    useEffect(() => {
        document.cookie = "visited=true; max-age=3600 path/";
        console.log("Cookie Set ✅");

        return document.cookie = "visited=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    
    }, [])

    return (
        <div>
            <p className="bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-lg text-center">We use Cookies for smooth journaling experience.</p>
        </div>
    )
};

export default Notification;
