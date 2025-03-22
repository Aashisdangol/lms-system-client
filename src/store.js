import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import bookReducer from "./redux/book/bookSlice";
import borrowReducer from "./redux/borrow/borrowSlice";
import reviewReducer from "./redux/review/reviewSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    borrow: borrowReducer,
    review: reviewReducer,
  }
})

export default store