import { createContext, useState } from "react";
const UserContext = createContext();
export {UserContext};

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({name:"Daddy..",role:"Full Stack Developer"});

    const updateUser = (newData)=>setUser((prev)=>({...prev, ...newData}));

    return (
        <UserContext.Provider value={} >
            {children}
        </UserContext.Provider>
    );

};