import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const AdminPrivateRoute = (props) => {
  const { children } = props
  const { user } = useSelector((state) => state.user);

  // Is the user logged in
  if(!user._id){
    return <Navigate to="/" />
  }

  // If user is logged in but is not admin
  if(user.role !== 'admin'){
    return <Navigate to="/" />
  }

  if(user.role === 'admin'){
    return children
  }

  return ( <Navigate to="/" /> );
}
 
export default AdminPrivateRoute;