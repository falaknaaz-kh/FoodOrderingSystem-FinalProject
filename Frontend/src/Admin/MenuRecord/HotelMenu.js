import React from "react";
import { Link } from "react-router-dom";
import Navbar3 from "../../Components/A_navbar";

const HotelMenu = () => {
  return (
    <div>
      <Navbar3 />
      <table style={{ width: "100%", textAlign: "center" }}>
        <tbody>
          <tr>
            <td>
              <Link to="/MenuTypeList">
                <button className="btn btn-info">Show All MenuTypes</button>
              </Link>
            </td>
            <td>
              <Link to="/menuList">
                <button className="btn btn-info">Show All Menu</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HotelMenu;
