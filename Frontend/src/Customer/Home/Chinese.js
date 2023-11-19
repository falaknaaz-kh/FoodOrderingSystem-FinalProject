import React from "react";
import Navbar2 from "../../Components/C_navbar";
import { Link } from "react-router-dom";
import triplerice from "../Images/Chinnes/tripleRice.jpg";

const Chinese = () => {
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
                      <img src={lollipop} className="anchorimages" />
                    </div>
                    <h6>lollipop</h6>
                  </Link>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={noodles} className="anchorimages" />
                    </div>
                    <h6>noodles</h6>
                  </Link>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/addcart">
                    <div>
                      <img src={soup} className="anchorimages" />
                    </div>
                    <h6>soup</h6>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="anchordiv">
                  <Link className="nav-link" to="/signin">
                    <div>
                      <img src={triplerice} className="anchorimages" />
                    </div>
                    <h6>triplerice</h6>
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

export default Chinese;
