import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard";

  function handleLogin() {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    localStorage.setItem("token", "demo-token");
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}