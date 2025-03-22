import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import { verifyUser } from "../../axios/userAxios";
import useLoader from "../../hooks/useLoader";
import { Container, Spinner, Stack } from "react-bootstrap";

const VerifyUserPage = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [isError, setIsError] = useState(false) // New state for error handling

  // Extract the info from URL
  const [params] = useSearchParams()
  const userEmail = params.get('email')
  const token = params.get('token')

  // For Loading
  const { isLoading, startLoading, stopLoading } = useLoader()

  // Send Request to API for verifying the user
  const verifyUserEmail = async() => {
    startLoading()
    const result = await verifyUser(userEmail, token)
    stopLoading()

    if (result.status === "error") {
      // Handle error
      toast.error(result.message)
      setIsError(true) // Set error state to true
      setIsEmailVerified(false)
    } else {
      // Handle success
      toast.success(result.message)
      setIsError(false) // Set error state to false
      setIsEmailVerified(true)
    }
  }

  useEffect(() => {
    if (userEmail && token) {
      verifyUserEmail()
    }
  }, [token, userEmail])

  return ( 
    <Container>
      {isLoading && 
        <Stack gap={4} className="vh-100 justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" role="status" />
          <p>Verifying email, Please wait ....</p>
        </Stack>
      }

      {/* Show error message if verification fails */}
      {isError && 
        <Stack gap={2} className="vh-100 justify-content-center align-items-center">
          <p>Could not verify the account!!</p>
        </Stack>
      }

      {/* Show success message when verified */}
      {isEmailVerified && !isError &&
        <Stack gap={2} className="vh-100 justify-content-center align-items-center">
          <div className="my-4">
            <lord-icon
                src="https://cdn.lordicon.com/twsqddew.json"
                trigger="in"
                delay="100"
                state="in-reveal"
                style={{ width:'250px', height:'250px'}}>
            </lord-icon>
          </div>
          <p>Email successfully verified, You can login now.</p>
          <Link to="/" className="btn btn-lg btn-outline-primary">
            Login Now
          </Link>
        </Stack>
      }
    </Container>
  );
}
 
export default VerifyUserPage;
