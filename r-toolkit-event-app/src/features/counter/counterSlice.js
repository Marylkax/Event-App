import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

const initialState = {
 location: "London",
};


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setEvents: (state,action) => {
      state.events= action.payload;  
    },
    setSearch: (state, action) => {
        state.search = action.payload;
    },
    setLocation: (state, action) => {
        state.location = action.payload;
    }

    
  },
});

export const { setEvents, setSearch, setLocation } = counterSlice.actions;

export const selectEvents = (state) => state.counter.events;
export const selectSearch = (state) => state.counter.search;
export const selectLocation = (state) => state.counter.location;

export default counterSlice.reducer;
