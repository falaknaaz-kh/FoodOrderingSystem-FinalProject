import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";
import Idli from "../Images/SouthIndian/idli.jpg";

const SouthIndian = () => {
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
                      <img src={Dosa} className="anchorimages" />
                    </div>
                    <h6>Dosa</h6>
                  </Link>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={Idli} className="anchorimages" />
                    </div>
                    <h6>Idli</h6>
                  </Link>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={Menduvada} className="anchorimages" />
                    </div>
                    <h6>Menduvada</h6>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className=" anchordiv">
                  <Link className="nav-link" to="/signin">
                    <div>
                      <img src={Uttappa} className="anchorimages" />
                    </div>
                    <h6>Uttappa</h6>
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
export default SouthIndian;
