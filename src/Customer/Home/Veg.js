import React from "react";
import Navbar2 from "../../Components/C_navbar";
import kajucurry from "../Images/Veg/Kajucurry.jpg";
import VegMaratha from "../Images/Veg/Vegmaratha.jpg";

const Veg = () => {
  return (
    <div className="container">
      <Navbar2></Navbar2>
      <div className="container">
        <div className="container">
          <table>
            <tr>
              <td>
                <div className=" anchordiv">
                  <div>
                    <img src={kajucurry} className="anchorimages" />
                  </div>
                  <h6>kajucurry</h6>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <div>
                    <img src={Panner} className="anchorimages" />
                  </div>
                  <h6>Panner</h6>
                </div>
              </td>
              <td>
                <div className="anchordiv">
                  <div>
                    <img src={PannerMasala} className="anchorimages" />
                  </div>
                  <h6>PannerMasala</h6>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className=" anchordiv">
                  <div>
                    <img src={VegAngara} className="anchorimages" />
                  </div>
                  <h6>VegAngara</h6>
                </div>
              </td>

              <td>
                <div className="anchordiv">
                  <div>
                    <img src={VegMaratha} className="anchorimages" />
                  </div>
                  <h6>VegMaratha</h6>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Veg;
