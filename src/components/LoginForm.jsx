import { Button, Form, Spinner } from "react-bootstrap";
import InputField from "./InputField";
import useForm from "../hooks/useForm";
import useLoader from "../hooks/useLoader";
import { toast } from "react-toastify";
import { loginUser } from "../axios/userAxios";
import { useDispatch, useSelector } from "react-redux";
import { autoLoginAction, getUserAction } from "../redux/user/userActions";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const initialFormData = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const { formData, handleOnChange } = useForm(initialFormData)
  const { email, password }  = formData

  const {isLoading, startLoading, stopLoading } = useLoader()

  const dispatch = useDispatch()

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    startLoading()

    // call axios to hit login endpoint
    const result = await loginUser(formData)

    stopLoading()
    
    if(result.status === "error"){
      return toast.error(result.message)
    }

    // If Success
    // store accessJWT in session storage
    // store refreshJWT in local storage
    sessionStorage.setItem("accessJWT", result.data.accessJWT)
    localStorage.setItem("refreshJWT", result.data.refreshJWT)

    // after tokens are stored
    // get user
    dispatch(getUserAction())
  }

  // Check if user exists | is present
  const { user } = useSelector(state => state.user)

  // Logic to navigate to another route once user exisit [logged in]
  const navigate = useNavigate()

  // Logic to check from wher user landed into login page
  const { state } = useLocation()
  const fromLocation = state?.from ? state.from : '/students/books' 
  
  useEffect(() => {
    if(user?._id && user?.role === "student"){
      navigate(fromLocation)
    }

    if(user?._id && user?.role === "admin"){
      navigate("/admin/dashboard")
    }

    if(!user?._id){
      dispatch(autoLoginAction())
    }
  }, [navigate, user])

  return ( 
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <InputField 
        label = "Email"
        inputFieldAttributes= {{
          type: 'email',
          name: 'email',
          value: email,
          placeholder: 'Enter your Email',
          onChange: handleOnChange,
          required: true
        }}
      />

      <InputField 
        label = "Password"
        inputFieldAttributes= {{
          type: 'password',
          name: 'password',
          value: password,
          placeholder: 'Enter a Password',
          onChange: handleOnChange,
          required: true
        }}
      />

      <Button
        variant="primary" 
        type="submit"
        disabled={isLoading}
        >
          {isLoading ? <Spinner animation="border" />: 'Login'}
        </Button>
    </Form>
   );
}
 
export default LoginForm;