import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../Constants/Url";
import Navbar3 from "../../Components/A_navbar";
import * as notification from "../../Constants/notification";
import { saveAs } from "file-saver";

export const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [filterValue, setFilterValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchOrders = async () => {
    const params = {
      sortBy,
      sortDirection,
      filterValue,
    };

    try {
      const response = await axios.get(url + "/order/all", { params });
      const result = response.data;
      if (result.status === "success") {
        setOrders(result.data);
      } else {
        notification.danger("error while loading list of orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      notification.danger("error while loading list of orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [sortBy, sortDirection, filterValue]);

  const sortOrders = (col) => {
    if (sortBy === col) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(col);
      setSortDirection("asc");
    }
  };

  const filteredOrders = orders.filter((order) => {
    return (
      order?.order?.customer?.firstName
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      order?.orderDetails[0]?.selectedMenu?.menuName
        .toLowerCase()
        .includes(filterValue.toLowerCase()) ||
      order?.order?.totalPrice.toString().includes(filterValue.toLowerCase()) ||
      order?.orderDetails[0]?.quantity
        .toString()
        .includes(filterValue.toLowerCase()) ||
      order?.order?.orderStatus
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const exportToCSV = () => {
    const csvRows = [];
    const headers = ["Name", "Menu", "Price", "Qty", "Status"];

    csvRows.push(headers.join(","));

    filteredOrders.forEach((order) => {
      const row = [
        `${order?.order?.customer?.firstName} ${order?.order?.customer?.lastName}`,
        order?.orderDetails[0]?.selectedMenu?.menuName,
        order?.order?.totalPrice,
        order?.orderDetails[0]?.quantity,
        order?.order?.orderStatus,
      ];
      csvRows.push(row.join(","));
    });

    const csvData = csvRows.join("\n");

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "orders.csv");
  };

  return (
    <section className="pb-5 header text-center">
      <div className="text-white">
        <Navbar3 />
        <h2 className="page-title text-info">
          <b>Customer Order Catalog</b>
        </h2>

        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto my-5">
              <div className="card p-3 border-0 shadow">
                <div>
                  <div className="d-flex justify-content-between align-items-center m-3">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={filterValue}
                      onChange={(e) => setFilterValue(e.target.value)}
                    />
                  </div>
                  <table className="table m-2">
                    <thead>
                      <tr>
                        <th scope="col" onClick={() => sortOrders("Name")}>
                          Name
                          {sortBy === "Name" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => sortOrders("Menu")}>
                          Menu
                          {sortBy === "Menu" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => sortOrders("Price")}>
                          Price
                          {sortBy === "Price" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => sortOrders("Qty")}>
                          Qty
                          {sortBy === "Qty" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => sortOrders("Status")}>
                          Status
                          {sortBy === "Status" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {currentOrders.map((order, index) => (
                        <tr key={index}>
                          <td>
                            {order?.order?.customer?.firstName}{" "}
                            {order?.order?.customer?.lastName}
                          </td>
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
                    <nav aria-label="Page navigation">
                      <div className="pagination">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => changePage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                        <span className="page-number">
                          Page {currentPage} of {totalPages}
                        </span>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => changePage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </div>
                    </nav>
                  </div>

                  <button
                    type="button"
                    className="btn btn-alert btn-sm ml-2"
                    onClick={exportToCSV}
                  >
                    <u>Export to CSV</u>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
