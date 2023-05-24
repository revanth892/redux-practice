import valueSlicer from "../slices/valueSlicer";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore(
    {
        reducer:{
            value:valueSlicer,
        },
    }
);

export default store;
