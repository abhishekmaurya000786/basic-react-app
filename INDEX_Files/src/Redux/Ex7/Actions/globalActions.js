import { createAction } from "@reduxjs/toolkit";

export const resetApp = createAction("app/reset"); // "app/reset" is the action type, it is not actually the directory or file path, it is just a string identifier for the action. More simpler words it is just a name.
export const forceLogout = createAction("app/forceLogout");


//    (Multiple other actions that could be defined here)
// export const logout = createAction("user/logout");
// export const hydrate = createAction("app/hydrate");
// export const userSwitched = createAction("user/switched");
// export const clearCache = createAction("cache/clear");