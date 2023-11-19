import React from "react";
import Navbar2 from "../../Components/C_navbar";
import chikencurry from "../Images/Nonveg/chikencurry.jpg";
import MurghMusallam from "../Images/Nonveg/MurghMusallam.jpg";

const Nonveg = () => {
  return (
    <div className="container">
      <Navbar2></Navbar2>
      <div className="container">
        <div className="container">
          <table>
            <tr>
              <td>
                <div className=" anchordiv">
                  <a href="/addcart" className="btn btn-success">
                    addcart
                  </a>

                  <div>
                    <img src={chikencurry} className="anchorimages " />
                  </div>
                  <h6>ChikenCurry</h6>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <a href="/addcart" className="btn btn-success">
                    addcart
                  </a>

                  <div>
                    <img src={kabab} className="anchorimages" />
                  </div>
                  <h6>kabab</h6>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <a href="/addcart" className="btn btn-success">
                    addcart
                  </a>

                  <div>
                    <img src={MurghMusallam} className="anchorimages" />
                  </div>
                  <h6>MurghMusallam</h6>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Nonveg;
