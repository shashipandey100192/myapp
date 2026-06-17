import { configureStore } from "@reduxjs/toolkit";
import myactionlist from './Myactions.js';


export const datastore = configureStore({
  reducer: {
    counter:myactionlist
  },
})