import { createAction } from "@reduxjs/toolkit";

export const resetApp = createAction("app/reset");
export const forceLayout = createAction("app/forceLayout");


//    (Multiple other actions that could be defined here)
// export const logout = createAction("user/logout");
// export const hydrate = createAction("app/hydrate");
// export const userSwitched = createAction("user/switched");
// export const clearCache = createAction("cache/clear");