import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";
import Langacha from "../Images/Sweets/Langcha.jpg";
import rasgulla from "../Images/Sweets/rasgulla.jpg";

const Sweets = () => {
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
                      <img src={dessert} className="anchorimages" />
                    </div>
                    <h6>dessert</h6>
                  </Link>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={Langacha} className="anchorimages" />
                    </div>
                    <h6>Langacha</h6>
                  </Link>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={rasgulla} className="anchorimages" />
                    </div>
                    <h6>rasgulla</h6>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className=" anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={rasmalai} className="anchorimages" />
                    </div>
                    <h6>rasmalai</h6>
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
export default Sweets;
