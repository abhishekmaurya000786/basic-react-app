import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile 👤</h2>

      <nav>
        <Link to="student">Student Info</Link>
      </nav>

      <hr />

      {/* 💡 Outlet = where nested child (Student) appears */}
      <Outlet />
    </div>
  );
}
