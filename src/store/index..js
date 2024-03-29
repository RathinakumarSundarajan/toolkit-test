import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'anyName',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        decrement(state){
            state.counter--;
        },
        reset(state){
            state.counter = 0
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        },
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;