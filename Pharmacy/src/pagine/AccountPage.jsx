import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AccountMenu from "../components/AccountMenu";
import EditAccountModal from "../components/EditAccountModal";
import CustomerNavbar from "../components/CustomerNavbar";

function AccountPage() {

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center pb-5">

      <Container fluid className="px-3 px-sm-4">

        <Row className="justify-content-center w-100">

          <Col xs={12} sm={10} md={8} lg={6} xl={5}>

            <AccountMenu openModal={openModal} />

          </Col>

        </Row>

      </Container>

      <EditAccountModal
        show={showModal}
        handleClose={closeModal}
        type={modalType}
      />

      <CustomerNavbar />

    </div>
  );
}

export default AccountPage;