import { Container, Row, Col } from "react-bootstrap";
import PharmacySearchBar from "../components/PharmacySearchBar";
  import PharmacyCard from "../components/PharmacyCard"
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/CustomerHomePage.css";

function CustomerHomePage() {
  const pharmacies = [
    {
      id: 1,
      nome: "Farmacia Centrale",
      indirizzo: "Via Roma 12, Bologna",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      nome: "Farmacia San Luca",
      indirizzo: "Via San Luca 8, Bologna",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      nome: "Farmacia Marconi",
      indirizzo: "Via Marconi 21, Bologna",
      image: "https://via.placeholder.com/100",
    },
  ];

  const lastPharmacy = pharmacies[0];

  return (
    <div className="customer-home-page bg-light min-vh-100">
      <Container fluid className="pt-4 px-3 px-sm-4 px-md-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <PharmacySearchBar pharmacies={pharmacies} />

            <div className="mt-4">
              <PharmacyCard
                pharmacy={lastPharmacy}
                title="Ultima farmacia cercata"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <CustomerNavbar />
    </div>
  );
}

export default CustomerHomePage;