import "../style/Header.css"
import { NavLink } from "react-router-dom";


export default function Home1() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Product
        </NavLink>
        <NavLink
          to="/detail"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Detail
        </NavLink>
      </nav>
      <h2>Home</h2>
    </div>
  );
}
