import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import CartItemCard from "../components/CartItemCard";
import CartSummaryCard from "../components/CartSummaryCard";
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/CartPage.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tachipirina 500mg",
      pharmacyName: "Farmacia Centrale",
      price: 8.90,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Vitamina C",
      pharmacyName: "Farmacia Centrale",
      price: 6.50,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
  setCartItems((prev) =>
    prev.flatMap((item) => {
      if (item.id !== id) return item;

      if (item.quantity === 1) return []; 

      return { ...item, quantity: item.quantity - 1 };
    })
  );
};

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page bg-light min-vh-100">
      <Container fluid className="pt-4 px-3 px-sm-4 px-md-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <h4 className="mb-4 cart-title">Carrello</h4>

            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <div className="mt-4">
              <CartSummaryCard total={total} />
            </div>
          </Col>
        </Row>
      </Container>

      <CustomerNavbar />
    </div>
  );
}

export default CartPage;