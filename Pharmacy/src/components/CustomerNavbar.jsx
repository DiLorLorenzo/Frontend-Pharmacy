import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shop, Receipt, Person, Cart } from "react-bootstrap-icons";
import "../css/CustomerNavbar.css";

function CustomerNavbar() {
  return (
    <Navbar bg="white" fixed="bottom" className="border-top">

      <Container fluid>

        <Nav className="w-100 d-flex justify-content-around text-center">

          <Nav.Link
            as={Link}
            to="/customer"
            className="d-flex flex-column align-items-center"
          >
            <Shop size={22} />
            <small>Farmacie</small>
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/orders"
            className="d-flex flex-column align-items-center"
          >
            <Receipt size={22} />
            <small>Ordini</small>
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/profile"
            className="d-flex flex-column align-items-center"
          >
            <Person size={22} />
            <small>Profilo</small>
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/cart"
            className="d-flex flex-column align-items-center"
          >
            <Cart size={22} />
            <small>Carrello</small>
          </Nav.Link>

        </Nav>

      </Container>

    </Navbar>
  );
}

export default CustomerNavbar;