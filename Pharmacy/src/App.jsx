import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pagine/HomePage";
import LoginPage from "./pagine/LoginPage";
import RegistrationChoicePage from "./pagine/RegistrationChoicePage";
import RegistrationUserPage from "./pagine/RegistrationUserPage";
import RegistrationPharmacyPage from "./pagine/RegistrationPharmacyPage";
import CustomerHomePage from "./pagine/CustomerHomePage";
import UserProfilePage from "./pagine/UserProfilePage";
import AccountPage from "./pagine/AccountPage";
import OrdersPage from "./pagine/OrdersPage";
import CartPage from "./pagine/CartPage";
import PharmacyPage from "./pagine/PharmacyPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationChoicePage />} />
          <Route path="/register/user" element={<RegistrationUserPage />} />
          <Route
            path="/register/pharmacy"
            element={<RegistrationPharmacyPage />}
          />
          <Route path="/customer" element={<CustomerHomePage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/account" element ={<AccountPage />}/>
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pharmacies/:id" element={<PharmacyPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
