import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AddressRow from "./AddressRow";
import { url } from "../../Constants/Url";
import Navbar2 from "../../Components/C_navbar";
import * as notification from "../../Constants/notification";
const ShowAddress = () => {
  const [userid] = useState(sessionStorage.getItem("userid"));
  const [addressId, setAddressId] = useState(0);

  const [address, setAddress] = useState([]);

  useEffect(() => {
    console.log(`address is loaded`);
    getAddresse();
  }, []);
  const getAddresse = () => {
    axios.get(url + `/address/all/${userid}`).then((response) => {
      const result = response.data;
      console.log(result.data.addressId);
      sessionStorage.setItem("addressId", result.data.addressId);
      console.log(result);
      if (result.status === "success") {
        setCart(result.data);
      } else {
        notification.danger("error while loading list of cart");
      }
    });
  };

  return (
    <section class="pb-5 header text-center">
      <div class="container py-5 text-white">
        <Navbar2></Navbar2>
        <div class="row">
          <div class="col-lg-9 mx-auto" className="myStyle">
            <div class="card border-0 shadow">
              <div>
                <div>
                  <table class="table m-0">
                    <thead>
                      <tr>
                        <th scope="col">AddresLine</th>
                        <th scope="col">Address Line 2</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Country</th>
                        <th scope="col">pinCode</th>
                      </tr>
                    </thead>
                    <tbody>
                      {addresse.map((addresse) => {
                        return <AddressRow addresse={addresse} />;
                      })}
                    </tbody>
                  </table>

                  <Link to="/OrderDetails">
                    <button type="button" class="btn btn-success btn-sm">
                      Placed Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowAddress;
