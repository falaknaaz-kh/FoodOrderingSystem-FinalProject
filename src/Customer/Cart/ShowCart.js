import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CartRow from "./CartRow";
import { url } from "../../Constants/Url";
import Navbar2 from "../../Components/C_navbar";
import * as notification from "../../Constants/notification";

const ShowCart = () => {
  const [userid] = useState(sessionStorage.getItem("userid"));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(`Cart is loaded`);
    getCart();
  }, []);
  const getCart = () => {
    axios.get(url + `/cart/all/${userid}`).then((response) => {
      const result = response.data;
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
                        <th scope="col">cart_Id</th>
                        <th scope="col">MenuType</th>
                        <th scope="col">Menu Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((cart) => {
                        return <CartRow cart={cart} />;
                      })}
                    </tbody>
                  </table>
                  <Link to="/AddAddress">
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

export default ShowCart;
