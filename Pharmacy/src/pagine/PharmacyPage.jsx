import { useMemo, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SecondaryHeader from "../components/SecondaryHeader";
import SearchBar from "../components/SearchBar";
import PharmacyInfoCard from "../components/PharmacyInfoCard";
import ProductCard from "../components/ProductCard";
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/PharmacyPage.css";

function PharmacyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const pharmacy = {
    id: 1,
    nome: "Farmacia Centrale",
    indirizzo: "Via Roma 12, Bologna",
    orari: "08:00 - 20:00",
    image: "https://via.placeholder.com/100",
  };

  const products = [
    { id: 1, nome: "Tachipirina 500mg", descrizione: "Antidolorifico e antipiretico", prezzo: 8.90, image: "https://via.placeholder.com/120" },
    { id: 2, nome: "Moment", descrizione: "Sollievo rapido dal dolore", prezzo: 7.50, image: "https://via.placeholder.com/120" },
    { id: 3, nome: "Aspirina", descrizione: "Compresse analgesiche", prezzo: 6.80, image: "https://via.placeholder.com/120" },
    { id: 4, nome: "Vitamina C", descrizione: "Integratore alimentare", prezzo: 9.20, image: "https://via.placeholder.com/120" },
    { id: 5, nome: "Enterogermina", descrizione: "Fermenti lattici", prezzo: 11.30, image: "https://via.placeholder.com/120" },
    { id: 6, nome: "Buscofen", descrizione: "Dolori e infiammazioni", prezzo: 8.10, image: "https://via.placeholder.com/120" },
    { id: 7, nome: "Oki", descrizione: "Granulato analgesico", prezzo: 10.40, image: "https://via.placeholder.com/120" },
    { id: 8, nome: "Imodium", descrizione: "Per disturbi intestinali", prezzo: 7.90, image: "https://via.placeholder.com/120" },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="pharmacy-page bg-light min-vh-100">
      <SecondaryHeader title={pharmacy.nome} />

      <Container fluid className="pharmacy-content-section px-3 px-sm-4 px-md-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={7} xl={6}>
            <PharmacyInfoCard pharmacy={pharmacy} />

            <div className="mt-4">
              <SearchBar
                placeholder="Cerca un prodotto nel catalogo..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(6);
                }}
              />
            </div>

            <div className="mt-4">
              <Row className="g-3">
                {visibleProducts.map((product) => (
                  <Col xs={12} sm={6} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </div>

            {visibleCount < filteredProducts.length && (
              <div className="d-grid mt-4">
                <Button variant="outline-success" size="lg" onClick={handleLoadMore}>
                  Carica altri prodotti
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <CustomerNavbar />
    </div>
  );
}

export default PharmacyPage;