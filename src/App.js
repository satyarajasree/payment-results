import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentStatus from "./PaymentStatus";
import Home from "./MainWebsite/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/payment-status" element={<PaymentStatus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
