import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { BsBackpack3, BsBook, BsBoxSeam, BsMenuUp, BsPerson, BsPersonCheck } from "react-icons/bs";
import {  useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Outlet } from "react-router";
import SidebarItem from "../components/SidebarItem";
import { logoutUserAction } from "../redux/user/userActions";

const AdminLayout = () => {
  const [activeItem, setActiveItem] = useState("Dashboard")
  const { user } = useSelector(state => state.user)
  const { name } = user || {}

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUserAction())
  }

  return ( 
    <Container fluid>
      <Row>
        <Col
          xs={3}
          className="vh-100 bg-info-subtle p-2 shadow position-fixed top-0 left-0"
        >
          <Stack className="h-100">
            <Card className="text-center fw-bold">
              <Card.Header>
                <BsPersonCheck size={100} />
              </Card.Header>

              <Card.Body>
                {name}
              </Card.Body>
            </Card>

            {/* Menu Items */}
            <Stack  className="my-4">
              <SidebarItem
                icon={<BsBoxSeam />} 
                label="Dashboard" 
                path="/admin/dashboard"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem
                icon={<BsBook />} 
                label="Books" 
                path="/admin/books" 
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem
                icon={<BsBackpack3 />} 
                label="Burrows" 
                path="/admin/burrows" 
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem 
                icon={<BsMenuUp />} 
                label="Reviews" 
                path="/admin/reviews"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
              <SidebarItem 
                icon={<BsPerson />} 
                label="Students" 
                path="/admin/students"
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </Stack>

            <div className="mt-auto">
              <Button 
                variant="outline-danger" 
                className="w-100"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </Stack>
        </Col>

        <Col style={{ marginLeft: "25%" }}>
          <div className="vh-100 vw-90 pt-4">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
   );
}
 
export default AdminLayout;