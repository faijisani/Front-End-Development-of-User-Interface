import React, { useState } from "react";

function StatusTracker() {
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("");

  function checkStatus() {
    if (!number) {
      setStatus("Please enter application number.");
      return;
    }

    setStatus("Application status: Under Review");
  }

  return (
    <div className="form">
      <h2>Track Application</h2>

      <input
        type="text"
        placeholder="Enter application number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={checkStatus}>Check Status</button>

      {status && <p>{status}</p>}
    </div>
  );
}

export default StatusTracker;