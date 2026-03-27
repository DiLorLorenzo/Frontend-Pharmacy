import { ListGroup } from "react-bootstrap";
import { Lock, Telephone, Envelope } from "react-bootstrap-icons";

function AccountMenu({ openModal }) {
  return (
    <ListGroup className="profile-menu">

      <ListGroup.Item
        onClick={() => openModal("password")}
        className="profile-menu-item d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center gap-3">
          <Lock />
          <span>Modifica password</span>
        </div>
        <span className="arrow">›</span>
      </ListGroup.Item>

      <ListGroup.Item
        onClick={() => openModal("phone")}
        className="profile-menu-item d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center gap-3">
          <Telephone />
          <span>Modifica numero di cellulare</span>
        </div>
        <span className="arrow">›</span>
      </ListGroup.Item>

      <ListGroup.Item
        onClick={() => openModal("email")}
        className="profile-menu-item d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center gap-3">
          <Envelope />
          <span>Email</span>
        </div>
        <span className="arrow">›</span>
      </ListGroup.Item>

    </ListGroup>
  );
}

export default AccountMenu;