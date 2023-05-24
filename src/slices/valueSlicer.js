import { createSlice } from "@reduxjs/toolkit";


export const valueSlicer=createSlice(
        {
            name:"value",
            initialState:{amt:0},
            reducers:
            {
                increment(state,action){
                    state.amt=state.amt+1;
                },
                decrement(state,action){
                    state.amt=state.amt-1;
                },
                incrementBy(state,action){
                
                    state.amt=state.amt+Number(action.payload);
                },
                decrementBy(state,action){
                    state.amt=state.amt-Number(action.payload);
                },
                resizeTo(state,action){
                    state=0;
                }
            }           
        }
);

export default valueSlicer.reducer;
export const {increment,decrement,incrementBy,decrementBy} =valueSlicer.actions;