import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PaymentStatus() {
  const [status, setStatus] = useState("Loading...");
  const [data, setData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const respData = params.get("respData");

    if (!respData) {
      setStatus("No response data found in URL.");
      return;
    }

    axios
      .post("https://backend.rajasreetownships.in/api/payment/decrypt", { respData })
      .then((res) => {
        const result = res.data;
        setData(result);

        switch (result.trans_status) {
          case "Ok":
            setStatus("✅ Payment Successful");
            break;
          case "To":
            setStatus("⏳ Payment Timed Out");
            break;
          default:
            setStatus("❌ Payment Failed");
            break;
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus("Something went wrong. Could not verify payment.");
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>{status}</h2>
      {data && (
        <div style={{ marginTop: "1rem" }}>
          <p><strong>Transaction ID:</strong> {data.txn_id}</p>
          <p><strong>Amount:</strong> ₹{data.txn_amount}</p>
          <p><strong>Status:</strong> {data.trans_status}</p>
        </div>
      )}
    </div>
  );
}
