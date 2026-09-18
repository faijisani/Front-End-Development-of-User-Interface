import React, { useState } from "react";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !service) {
      setMessage("Please fill all required fields.");
      return;
    }

    setMessage("Application submitted successfully!");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Application Form</h2>

      <label>Full Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <label>Select Service</label>
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option value="">Select a service</option>
        <option value="certificate">Certificate Application</option>
        <option value="document">Document Request</option>
        <option value="complaint">Citizen Complaint</option>
      </select>

      <button type="submit">Submit Application</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default ApplicationForm;