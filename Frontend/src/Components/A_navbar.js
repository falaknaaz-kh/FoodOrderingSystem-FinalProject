import { Link } from "react-router-dom";
import "../Components/navbar.css";
import { useAuthContext } from "../contexts/AuthContext";
const Navbar3 = () => {
  const { logout } = useAuthContext();
  return (
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
      <div class="container">
        <Link to="/" class="navbar-brand" style={{ textDecoration: "none" }}>
          <span class="text-uppercase font-weight-bold">Admin</span>
        </Link>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link
                to="/UserList"
                class="nav-link"
                style={{ textDecoration: "none" }}
              >
                User-List
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/HotelMenu"
                class="nav-link"
                style={{ textDecoration: "none" }}
              >
                Hotel Menu
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/DeliveryBoyList"
                class="nav-link"
                style={{ textDecoration: "none" }}
              >
                DeliveryBoy-List
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/allorders"
                class="nav-link"
                style={{ textDecoration: "none" }}
              >
                All Orders
              </Link>
            </li>
            <button onClick={() => logout()} className="btn btn-danger mx-3">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
