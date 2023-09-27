import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../../Constants/Url";
import OrdersRow from "./OrdersRow";
import Navbar4 from "../../Components/D_navbar";
import { toast } from "react-toastify";

const AllOrdersRecord = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log(`orders is loaded`);
    getOrders();
  }, []);

  const getOrders = () => {
    axios.get(url + "/order/all").then((response) => {
      const result = response.data;
      sessionStorage.setItem("orderId", result.data.orderId);
      if (result.status === "success") {
        setOrders(result.data);
      } else {
        toast.danger("error while loading list of orders");
      }
    });
  };

  return (
    <section class="pb-5 header text-center">
      <Navbar4></Navbar4>
      <h2 className="page-title text-info">
        <b>Customer Orders for Delivery</b>
      </h2>
      <div class="container py-5 text-white">
        <div class="row">
          <div class="col-lg-9 mx-auto">
            <div class="card border-0 shadow p-3">
              <div>
                <div>
                  <table className="m-1 table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Order_Id</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Grand Total</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => {
                        return <OrdersRow order={order} />;
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllOrdersRecord;
