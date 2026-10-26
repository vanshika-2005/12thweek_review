import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>My Notes</h1>
      <p>Welcome to your dashboard.</p>

      <Link to="/notes/1">Open Note 1</Link>
      <br />
      <Link to="/dashboard/trash">Open Trash</Link>
      <br /> 
      <Link to ="/dashboard/Labels">Open Labels </Link>
    </div>
  );
}