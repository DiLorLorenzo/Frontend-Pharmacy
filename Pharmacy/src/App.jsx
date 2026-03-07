import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pagine/HomePage";
import LoginPage from "./pagine/LoginPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );  
}

export default App;