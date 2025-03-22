import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";

const StudentLayout = () => {
  return ( 
    <div className="vh-100 d-flex flex-column">
      <Header />

      <main className="flex-grow-1">
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </div>
   );
}
 
export default StudentLayout;