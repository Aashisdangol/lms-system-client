import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)

  return (
    <Container className="p-4 border shadow-lg">
      <Stack gap={0}>
        {isLoginForm ? <LoginForm /> : <SignupForm setIsLoginForm={setIsLoginForm}/>}
        
        {
          isLoginForm 
            ? <p>Don&apos;t have account? <Button variant="link" className="p-0" onClick={() => setIsLoginForm(false)}>Sign Up</Button></p>
            : <p>Already have account? <Button variant="link" className="p-0" onClick={() => setIsLoginForm(true)}>Login</Button></p>
        }
      </Stack>
    </Container>
  )
}
 
export default AuthForm;