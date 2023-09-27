import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../../Components/C_navbar";
import kolhapuri from "../Images/Thali/kolhapuri.jpg";
import kokani from "../Images/Thali/kokani.jpg";
import satari from "../Images/Thali/satari.jpg";
import punjabi from "../Images/Thali/punjabi.jpg";
import puranpoli from "../Images/Thali/puran-poli.jpg";
import gujarati from "../Images/Thali/gujarati-thali.jpg";

const Thali = () => {
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
                      <img src={kolhapuri} className="anchorimages" />
                    </div>
                    <h6>kolhapuri</h6>
                  </Link>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={kokani} className="anchorimages" />
                    </div>
                    <h6>kokani</h6>
                  </Link>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={satari} className="anchorimages" />
                    </div>
                    <h6>satari</h6>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className=" anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={punjabi} className="anchorimages" />
                    </div>
                    <h6>punjabi</h6>
                  </Link>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={puranpoli} className="anchorimages" />
                    </div>
                    <h6>puranpoli</h6>
                  </Link>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/signin">
                    <div>
                      <img src={gujarati} className="anchorimages" />
                    </div>
                    <h6>gujarati</h6>
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
export default Thali;
