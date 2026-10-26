import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to FundooNotes</h1>
      <p>Save and manage your notes.</p>
      <Link to="/login">Get Started</Link>
    </div>
  );
}