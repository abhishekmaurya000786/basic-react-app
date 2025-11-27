import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState : {
        value : 0,
    },
    reducers: {
        increment : state => {
            state.value+=1;
        },
        decrement : state=>{
            state.value-=1;
        },
        incrementByAmount : (state, action)=>{
            console.log("Helle",action.payload);
            state.value += Number(action.payload); // action.payload actually consists of the value passed from the component ex: <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>
            // state.value += action.payload; // This will not work if the payload is a string, it will concatenate the value instead of adding it. , in simple words, action.payload is the value passed from the component, in this case, it is a string "5", so we need to convert it to a number before adding it to the state.
            // console.log("Incremented by",action.payload);
        },
        reset : (state)=>{
            state.value = 0;
        }
        
        
    }
});
console.log(counterSlice);
export const {increment,decrement,incrementByAmount,reset} = counterSlice.actions;
export default counterSlice.reducer;