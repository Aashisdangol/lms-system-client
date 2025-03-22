import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

const StudentPrivateRoute = (props) => {
  const { children } = props

  const location = useLocation();
  
  const { user } = useSelector((state) => state.user);

  if(!user?._id) { return <Navigate to="/" state={{ from: { location } }} /> }
  
  return children
}
 
export default StudentPrivateRoute;