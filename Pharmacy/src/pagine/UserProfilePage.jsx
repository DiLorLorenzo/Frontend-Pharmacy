import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import ProfileMenu from "../components/ProfileMenu";
import CustomerNavbar from "../components/CustomerNavbar";
import "../css/UserProfilePage.css";

function UserProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Errore nel caricamento del profilo");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Errore profilo:", error.message);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) {
    return (
      <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
        <p>Caricamento profilo...</p>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100">
      <Header />

      <Container fluid className="profile-card-section px-3 px-sm-4">
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