import { ListGroup } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Person, Globe, BoxArrowRight } from "react-bootstrap-icons";
import "../css/ProfileMenu.css";

function ProfileMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");

    navigate("/login");
  };

  return (
    <ListGroup className="profile-menu">
      <ListGroup.Item
        as={Link}
        to="/account"
        className="profile-menu-item d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center gap-3">
          <Person />
          <span>Account</span>
        </div>
        <span className="arrow">›</span>
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/language"
        className="profile-menu-item d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center gap-3">
          <Globe />
          <span>Lingua</span>
        </div>
        <span className="arrow">›</span>
      </ListGroup.Item>

      <ListGroup.Item
        action
        onClick={handleLogout}
        className="profile-menu-item logout d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center gap-3">
          <BoxArrowRight />
          <span>Logout</span>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ProfileMenu;