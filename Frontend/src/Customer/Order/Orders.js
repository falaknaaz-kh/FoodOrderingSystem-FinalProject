import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { url } from "../../Constants/Url";
import Navbar2 from "../../Components/C_navbar";
import { useAuthContext } from "../../contexts/AuthContext";
import * as notification from "../../Constants/notification";

export const Orders = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 3;

  const fetchOrders = async () => {
    try {
      const response = await axios.get(url + "/order/customer/all/" + user?.id);
      const result = response.data;
      if (result.status === "success") {
        setOrders(result.data);
      } else {
        notification.danger("Error while loading list of orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      notification.danger("An error occurred while fetching orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;

  const filteredOrders = orders.filter((order) => {
    const menuName = order?.orderDetails[0]?.selectedMenu?.menuName || "";
    return menuName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section class="header text-center">
      <div class="text-white">
        <Navbar2></Navbar2>
        <div class="row mt-5">
          <div className="col-md-8 mx-auto">
            <div class="card p-3 border-0 shadow">
              <div>
                {/* Search Bar */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by menu name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div>
                  <table class="table m-2">
                    <thead>
                      <tr>
                        <th scope="col">Menu</th>
                        <th scope="col">Price</th>

                        <th scope="col">Qty</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders
                        .filter((order) => {
                          const menuName =
                            order?.orderDetails[0]?.selectedMenu?.menuName ||
                            "";
                          return menuName
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase());
                        })
                        .slice(indexOfFirstOrder, indexOfLastOrder)
                        .map((order, index) => (
                          <tr key={index}>
                            <td>
                              {order?.orderDetails[0]?.selectedMenu?.menuName}
                            </td>
                            <td>{order?.order?.totalPrice}</td>
                            <td>{order?.orderDetails[0]?.quantity}</td>
                            <td>{order?.order?.orderStatus}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>

                  <div className="d-flex justify-content-center mt-3">
                    <div className="pagination">
                      <button
                        className="btn btn-primary btn-sm mx-2"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      <button
                        className="btn btn-primary btn-sm mx-2"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={indexOfLastOrder >= orders.length}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
