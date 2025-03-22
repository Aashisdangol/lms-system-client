import { Button, Dropdown, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logoutUserAction } from "../redux/user/userActions";

const Header = () => {
  const { user: { _id, name }} = useSelector(state => state.user)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUserAction())
  }

  return ( 
    <Navbar expand="lg" className="bg-info-subtle px-4 align-items-center">
      <Link to="/students/books" className="fw-bold text-dark text-decoration-none"><Navbar.Brand>LMS</Navbar.Brand></Link>

      <Navbar.Toggle />

      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Item>
            {_id && 
            <Dropdown>
              <Dropdown.Toggle 
                id="dropdown-autoclose-true" 
                className="bg-transparent text-dark fw-bold border-2 border-primary"
              >
                {name}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="fw-bold">
                  <Link to="/students/borrowHistory" className="text-decoration-none text-dark">Burrow History</Link>
                </Dropdown.Item>

                <Dropdown.Item>
                  <Button 
                    variant="outline-danger" 
                    className="w-100"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </Button>
                  </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            }
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   );
}
 
export default Header;