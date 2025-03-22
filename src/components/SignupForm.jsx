import { Button, Form, Spinner } from "react-bootstrap";
import useForm from "../hooks/useForm";
import InputField from "./InputField";
import useLoader from "../hooks/useLoader";
import { createUser } from "../axios/userAxios";
import { toast } from "react-toastify";

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  confirm_password: '',
}

const SignupForm = (props) => {
  const { setIsLoginForm } = props

  // Form Handling
  const {formData, handleOnChange} = useForm(initialFormData)
  const { name, email, address, phone, password } = formData

  // For Loading
  const { isLoading, startLoading, stopLoading } = useLoader()

  const handleOnSubmit = async(e) => {
    e.preventDefault()

    startLoading()
    // send api request to create user
    const result = await createUser({
      name,
      email,
      address,
      phone,
      password
    })
    stopLoading()

    // Error Hanlding
    if(result.status === "error"){
      return toast.error(result.message)
    }

    // Success
    toast.success(result.message)
    setIsLoginForm(true)
  }

  return ( 
    <Form onSubmit={handleOnSubmit}>
      <h2 className="text-center mb-4">Create an Account</h2>

      <InputField
        label = "Full Name"
        inputFieldAttributes= {{
          type: 'text',
          name: 'name',
          value: formData.name,
          placeholder: 'Enter your full name',
          onChange: handleOnChange,
          required: true,
        }}
      />

      <InputField 
        label = "Email"
        inputFieldAttributes= {{
          type: 'email',
          name: 'email',
          value: formData.email,
          placeholder: 'Enter your email',
          onChange: handleOnChange,
          required: true,
        }}
      />

      <InputField 
        label = "Phone"
        inputFieldAttributes= {{
          type: 'tel',
          name: 'phone',
          value: formData.phone,
          placeholder: 'Enter your phone',
          onChange: handleOnChange,
          required: true,
        }}
      />

      <InputField 
        label = "Address"
        inputFieldAttributes= {{
          type: 'text',
          name: 'address',
          value: formData.address,
          placeholder: 'Enter your address',
          onChange: handleOnChange,
          required: true,
        }}
      />

      <InputField 
        label = "Password"
        inputFieldAttributes= {{
          type: 'password',
          name: 'password',
          value: formData.password,
          placeholder: 'Enter your password',
          onChange: handleOnChange,
          required: true,
        }}
      />

      <InputField 
        label = "Confirm Password"
        inputFieldAttributes= {{
          type: 'password',
          name: 'confirm_password',
          value: formData.confirm_password,
          placeholder: 'Confirm your password',
          onChange: handleOnChange,
          required: true,
        }}
      />

      <Button
        variant="primary" 
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <Spinner animation="border" /> : 'Sign up'}
      </Button>
    </Form>
   );
}
 
export default SignupForm;