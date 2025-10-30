import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard 🧭</h1>

      <nav>
        <Link to="profile">Profile</Link> | 
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* 💡 Outlet = where child routes (Profile/Settings) appear */}
      <Outlet />
    </div>
  );
}
