import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CartRow from "./CartRow";
import { url } from "../../Constants/Url";
import Navbar2 from "../../Components/C_navbar";
import { useAuthContext } from "../../contexts/AuthContext";
import * as notification from "../../Constants/notification";
import { toast } from "react-toastify";

const AddCart = () => {
  const { user } = useAuthContext();
  const [userid] = useState(sessionStorage.getItem("userid"));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(`Cart is loaded`);
    getCart();
  }, []);

  const getCart = () => {
    axios
      .get(url + `/cart/all/${user?.id}`)
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result.status === "success") {
          setCart(result.data);
        } else {
          notification.danger("error while loading list of cart");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCart = async (id) => {
    axios
      .delete(url + `/cart/delete/${id}`)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          toast("deleted succesfully");
          getCart();
        } else {
          notification.danger("error while loading list of cart");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section class="header text-center">
      <div class=" text-white">
        <Navbar2 />
        <div class="row container mx-auto p-4">
          <div class="col-lg-9 mx-auto">
            <div class="card border-0 shadow p-3">
              <div>
                <div>
                  <table class="table m-2">
                    <thead>
                      <tr>
                        <th scope="col">cart_Id</th>
                        <th scope="col">MenuType</th>

                        <th scope="col">Menu Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((cart) => {
                        return (
                          <CartRow
                            cart={cart}
                            onDelete={() => deleteCart(cart?.id)}
                          />
                        );
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

export default AddCart;
