import { configureStore } from '@reduxjs/toolkit';
import Myactionlist from './Myactions';


export const Mystorage = configureStore({
    reducer: {
        'myfunc':Myactionlist,
    },

});