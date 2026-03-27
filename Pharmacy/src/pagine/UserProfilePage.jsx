import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/UserProfilePage.css";
import ProfileMenu from "../components/ProfileMenu";

function UserProfilePage() {
  // DATI MOCK (poi li prenderemo dal backend)
  const user = {
    nome: "Mario",
    cognome: "Rossi",
    codiceFiscale: "RSSMRA90A01H501Z",
  };

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <Container fluid="sm" className="profile-card-section px-3 px-sm-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <ProfileCard user={user} />

            <div className="mt-4">
              <ProfileMenu />
            </div>
          </Col>
        </Row>
      </Container>

      <CustomerNavbar />
    </div>
  );
}

export default UserProfilePage;
