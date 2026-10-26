import {
  Outlet,
  Link,
  
} from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/login">Login</Link>{" | "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <hr />

      <Outlet />
      
    </div>
  );
}