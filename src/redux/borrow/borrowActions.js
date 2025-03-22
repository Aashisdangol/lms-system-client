import { toast } from "react-toastify"
import { getBookAction } from "../book/bookActions"
import { setBorrows } from "./borrowSlice"
import { createBorrow, getBorrows, returnBorrow } from "../../axios/borrowAxios"

// get user burrows
export const getBorrowsAction = () => async(dispatch) => {
  const result = await getBorrows()

  if(result?.status === "error"){
    return toast.error(result.message)
  }

  dispatch(setBorrows(result.data))
}

// create a burrow
export const createBorrowAction = (borrowObj) => async(dispatch) => {
  const result = await createBorrow(borrowObj)

  if(result?.status === "error"){
    return toast.error(result.message)
  }

  // Fetch Burrows again
  dispatch(getBorrowsAction(borrowObj.user_id))
  // if burrow is created for a book, fetch book again
  dispatch(getBookAction(borrowObj.book_id))
}

// update a burrow
export const returnBorrowAction = (borrowId) => async(dispatch) => {
  const result = await returnBorrow(borrowId)

  if(result?.status === "error"){
    return toast.error(result.message)
  }

  // once a burrow is reutrned, we get book details again
  toast.success(result.message)
  dispatch(getBorrowsAction())
}