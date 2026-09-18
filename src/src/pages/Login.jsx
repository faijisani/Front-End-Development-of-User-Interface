import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Login request submitted.");
  }

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Citizen Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="password" placeholder="Enter password" />

      <button type="submit">Login</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default Login;