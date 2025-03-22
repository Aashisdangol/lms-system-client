import { toast } from "react-toastify"
import { setUser } from "./userSlice"
import { getAccessToKen, getUser, logoutUser } from "../../axios/userAxios"

export const getUserAction = () => async(dispatch) => {
  // Loading
  // call axios to get user
  const result = await getUser()

  
  if(result?.status === "error") {
    if(result.message === 'Invalid auth token'){
      sessionStorage.setItem("accessJWT", '')
      dispatch(autoLoginAction())
    }

    return toast.error(result.message)
  }

  dispatch(setUser(result.data))
}

export const autoLoginAction = () => async(dispatch) => {
  // GET THE TOKENS"
  const accessJWT = sessionStorage.getItem("accessJWT")
  const refreshJWT = localStorage.getItem("refreshJWT")

  // if both token does not exist
  if(!accessJWT && !refreshJWT){
    return
  }

  if(!accessJWT && refreshJWT){
    // try to get valid access token
    const result = await getAccessToKen()

    if(result.status === "error"){
      return
    }

    // if success, you will have new access token
    sessionStorage.setItem("accessJWT", result.data)
    dispatch(getUserAction())

    return
  }

  // if accessJWT present
  dispatch(getUserAction())
}

// Logout user
export const logoutUserAction = () => async(dispatch) => {
  // call api to logout from api as well
  const result = await logoutUser()

  if(result.status === "error"){
    return toast.error(result.message)
  }

  // remove tokens from browser storage
  sessionStorage.removeItem("accessJWT")
  localStorage.removeItem("refreshJWT")
  // clear user state
  dispatch(setUser({}))
}