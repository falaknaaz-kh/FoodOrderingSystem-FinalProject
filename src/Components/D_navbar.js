import { Link } from "react-router-dom";
import "../Components/navbar.css";
import { useAuthContext } from "../contexts/AuthContext";

const Navbar4 = () => {
  const { logout } = useAuthContext();
  return (
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
      <div class="container">
        <Link to="/" class="navbar-brand">
          <span
            class="text-uppercase font-weight-bold"
            style={{ textDecoration: "none" }}
          >
            Delivery
          </span>
        </Link>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link
                to="/AllOrdersRecord"
                class="nav-link"
                style={{ textDecoration: "none" }}
              >
                Order Details
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/map"
                class="nav-item"
                style={{ textDecoration: "none" }}
              >
                <div class="nav-link">Map</div>
              </Link>
            </li>
            <button onClick={logout} className="nav-link btn btn-danger mx-3">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar4;
