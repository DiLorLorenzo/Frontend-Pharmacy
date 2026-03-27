import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import OrderCard from "../components/OrderCard";
import OrderDetailsModal from "../components/OrderDetailsModal";
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/OrdersPage.css";

function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const orders = [
    {
      id: 1,
      pharmacyName: "Farmacia Centrale",
      pharmacyImage: "https://via.placeholder.com/100",
      date: "07/03/2026",
      total: 24.90,
      status: "Consegnato",
      products: [
        { name: "Tachipirina 500mg", quantity: 1, price: 8.90 },
        { name: "Vitamina C", quantity: 2, price: 8.00 },
      ],
    },
    {
      id: 2,
      pharmacyName: "Farmacia San Luca",
      pharmacyImage: "https://via.placeholder.com/100",
      date: "05/03/2026",
      total: 16.50,
      status: "In preparazione",
      products: [
        { name: "Moment", quantity: 1, price: 6.50 },
        { name: "Aspirina", quantity: 1, price: 10.00 },
      ],
    },
  ];

  const openModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setShowModal(false);
  };

  return (
    <div className="orders-page bg-light min-vh-100">
      <Container fluid className="pt-4 px-3 px-sm-4 px-md-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <h4 className="mb-4 orders-title">I tuoi ordini</h4>

            <div className="d-flex flex-column gap-3">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} onOpen={openModal} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <OrderDetailsModal
        show={showModal}
        handleClose={closeModal}
        order={selectedOrder}
      />

      <CustomerNavbar />
    </div>
  );
}

export default OrdersPage;