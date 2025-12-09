import { createAction } from "@reduxjs/toolkit";

export const resetAll = createAction("global/resetAll"); 
// We wrote this action to reset the entire app state, even though we could have written "abc/cde" inside createAction but to keep it meaningful we wrote "global/resetAll". These are just sign ifiers. We write theme using / because there is a reason to keep them organized.