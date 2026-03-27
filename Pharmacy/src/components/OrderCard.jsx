import { Card, Image } from "react-bootstrap";
import "../css/OrderCard.css";

function OrderCard({ order, onOpen }) {
  return (
    <Card className="order-card border-0" onClick={() => onOpen(order)}>
      <Card.Body className="py-3 px-3">
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <Image
              src={order.pharmacyImage || "/default-pharmacy.png"}
              roundedCircle
              className="order-pharmacy-avatar"
            />

            <div className="order-info">
              <h6 className="mb-1 order-pharmacy-name">{order.pharmacyName}</h6>
              <p className="mb-0 order-products">
                {order.products.map((product) => product.name).join(", ")}
              </p>
            </div>
          </div>

          <div className="order-price text-end">
            € {order.total.toFixed(2)}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default OrderCard;