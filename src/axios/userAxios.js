import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_BASE_API_URL
const USER_ENDPOINT = '/api/v1/users'

const USER_API_URL = API_BASE_URL + USER_ENDPOINT

// Public Routes
// Signup | Create User | POST
export const createUser = (userObj) => {
  const response = axios
                    .post(USER_API_URL, userObj)
                    .then(res => res.data)
                    .catch(e => console.log(e))

  return response
}

// Verify User
export const verifyUser = (userEmail, token) => {
  const response = axios
                    .patch(USER_API_URL, {userEmail, token})
                    .then(res => res.data)
                    .catch(e => console.log(e))

return response
}

// Login User
export const loginUser = (userObj) => {
  const response = axios.post(`${USER_API_URL}/login`, userObj)
                    .then(res => res.data)
                    .catch(error => { console.log(error); })
                
  return response
}

// Private Endpoints
export const getUser = () => {
  const response = axios.get(USER_API_URL, {
                      headers: {
                        Authorization: sessionStorage.getItem("accessJWT")
                      }
                    })
                    .then(res => res.data)
                    .catch(error => { console.log(error); })

  return response
}

// Private Endpoint
export const getAccessToKen = () => {
  const response = axios.get(`${USER_API_URL}/accessjwt`, {
                      headers: {
                        Authorization: localStorage.getItem("refreshJWT")
                      }
                    })
                    .then(res => res.data)
                    .catch(error => { console.log(error); })

  return response
}

// Logout user
export const logoutUser = () => {
  const response = axios.post(USER_API_URL + "/logout", 
                    {},
                    {
                      headers: {
                        Authorization: sessionStorage.getItem("accessJWT")
                      }
                    })
                    .then(res => res.data)
                    .catch(error => { throw error })
                
  return response
}