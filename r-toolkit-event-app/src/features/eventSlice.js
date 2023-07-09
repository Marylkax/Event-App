import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

const initialState = {
  location: "London2",
  liked: [],
  detailsID: "",
  //  liked: "true"
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLiked: (state, action) => {
      const indexOf = state.liked.indexOf(action.payload);

      if (indexOf === -1) {
        const result = {
          ...state,
          liked: [...state.liked, action.payload],
        };

        return result;
      }

      const liked = [...state.liked];
      liked.splice(indexOf, 1);
      const result = { ...state, liked };

      return result;
    },
    setActivityTag: (state, action) => {
      state.activitytag = action.payload;
    },
    setDetailsId: (state, action) => {
      state.detailsID = action.payload;
    },
  },
});

export const { setEvents, setSearch, setLiked, setActivityTag, setDetailsId } =
  eventSlice.actions;

export const selectEvents = (state) => state.event.events;
export const selectSearch = (state) => state.event.search;
export const selectLiked = (state) => state.event.liked;
export const selectActivityTag = (state) => state.event.activitytag;
export const selectDetailsID = (state) => state.event.detailsID;
export default eventSlice.reducer;
