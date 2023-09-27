import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Components/navbar.css";
import { useAuthContext } from "../contexts/AuthContext";
import "./navbar.css";

const Navbar2 = ({ onCatChange = (selectedCat) => undefined }) => {
  const { logout } = useAuthContext();
  const [selectedCat, setSelectedCat] = useState();

  useEffect(() => {
    onCatChange(selectedCat);
  }, [selectedCat]);

  return (
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
      <div class="container">
        <Link
          to="/"
          class="navbar-brand nav-item"
          style={{ textDecoration: "none" }}
        >
          <span class="text-uppercase font-weight-bold">Crave Click</span>
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

        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse d-flex justify-content-end"
        >
          <ul class="navbar-nav">
            <Link
              to="/contact"
              class="nav-item"
              style={{ textDecoration: "none" }}
            >
              <div class="nav-link">Contact</div>
            </Link>
            <Link to="/map" class="nav-item" style={{ textDecoration: "none" }}>
              <div class="nav-link">Map</div>
            </Link>
            <Link
              to="/about"
              class="nav-item"
              style={{ textDecoration: "none" }}
            >
              <div class="nav-link">About</div>
            </Link>
            <Link
              to="/orders"
              class="nav-item"
              style={{ textDecoration: "none" }}
            >
              <div class="nav-link">My Orders</div>
            </Link>
            <Link
              to="/chat"
              class="nav-item"
              style={{ textDecoration: "none" }}
            >
              <div class="nav-link">Chat</div>
            </Link>
            <Link
              to="/updateprofile"
              class="nav-item"
              style={{ textDecoration: "none" }}
            >
              <div class="nav-link">Profile</div>
            </Link>
            <Link
              to="/AddCart"
              class="nav-item"
              style={{ textDecoration: "none" }}
            >
              <div class="nav-link">
                <i class="bi bi-cart-fill"></i>
              </div>
            </Link>
            <button className="nav-link btn btn-danger mx-3" onClick={logout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
