import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";


const Roti = () => {
  return (
    <div className="container">
      <Navbar2></Navbar2>
      <div className="container">
        <div className="container">
          <table>
            <tr>
              <td>
                <div className=" anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={Bhakari} className="anchorimages" />
                    </div>
                    <h6>Bhakari</h6>
                  </Link>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={Butturnan} className="anchorimages" />
                    </div>
                    <h6>Butturnan</h6>
                  </Link>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={roti} className="anchorimages" />
                    </div>
                    <h6>Roti</h6>
                  </Link>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Roti;
