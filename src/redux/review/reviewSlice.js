import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  reviews: [],
}

const reviewSlice = createSlice({
   name: "review",
   initialState,
   reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload
    },
   }
})

const { reducer: reviewReducer, actions } = reviewSlice

export const { setReviews } = actions
export default reviewReducer