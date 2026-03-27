import { Modal, ListGroup, Badge } from "react-bootstrap";
import "../css/OrderDetailsModal.css";

function OrderDetailsModal({ show, handleClose, order }) {
  if (!order) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Dettagli ordine</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="mb-3">
          <h5 className="mb-1">{order.pharmacyName}</h5>
          <p className="text-muted mb-0">{order.date}</p>
        </div>

        <ListGroup variant="flush" className="mb-3">
          {order.products.map((product, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center px-0"
            >
              <div>
                <div className="fw-semibold">{product.name}</div>
                <small className="text-muted">Quantità: {product.quantity}</small>
              </div>

              <div>€ {product.price.toFixed(2)}</div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="fw-semibold">Totale</span>
          <span className="fw-semibold">€ {order.total.toFixed(2)}</span>
        </div>

        <div>
          <Badge bg="success">{order.status}</Badge>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OrderDetailsModal;