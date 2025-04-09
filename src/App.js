import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentStatus from "./PaymentStatus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/payment-status" element={<PaymentStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
