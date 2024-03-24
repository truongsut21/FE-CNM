import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../features/common/headerSlice";
import modalSlice from "../features/common/modalSlice";
import rightDrawerSlice from "../features/common/rightDrawerSlice";
import leadsSlice from "../features/leads/leadSlice";
import userSlice from "./userSlice";
import phonebookSlice from "./phonebookSlice";
import groupSlice from "./groupSlice";
import chatSlice from "./chatSlice";

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadsSlice,
  user: userSlice,
  phonebookSlice: phonebookSlice,
  groupSlice: groupSlice,
  chatSlice: chatSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
