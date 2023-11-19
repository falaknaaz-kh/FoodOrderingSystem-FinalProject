import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../../Constants/Url";
import DeliveryBoyRow from "../DeliveryBoyRecord/DeliveryBoyRow";
import Navbar3 from "../../Components/A_navbar";
import * as notification from "../../Constants/notification";
import { saveAs } from "file-saver";

const DeliveryBoyList = () => {
  const [deliveryBoyList, setDeliveryBoyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("DeliveryBoy_Id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    console.log("Component is loaded");
    getDeliveryBoyList();
  }, []);

  const getDeliveryBoyList = () => {
    axios
      .get(url + "/admin/deliveryBoyList")
      .then((response) => {
        const result = response?.data;
        if (result?.status === "success") {
          setDeliveryBoyList(result.data);
        } else {
          notification.danger("Error while loading list of DeliveryBoyList");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const exportToCSV = () => {
    const csvRows = [];
    const headers = [
      "DeliveryBoy_Id",
      "FirstName",
      "LastName",
      "Email",
      "PhoneNo",
    ];

    csvRows.push(headers.join(","));

    deliveryBoyList.forEach((user) => {
      const row = [
        user.id,
        user.firstName,
        user.lastName,
        user.email,
        user.phoneNo,
      ];
      csvRows.push(row.join(","));
    });

    const csvData = csvRows.join("\n");

    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "delivery_boys.csv");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = deliveryBoyList.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="pb-5 header text-center">
      <Navbar3 />
      <h2 className="page-title text-info">
        <b>Delivery Boy List Catalog</b>
      </h2>
      <div className="container py-5 text-white">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="card border-0 shadow p-2">
              <div>
                <div>
                  <div className="d-flex justify-content-between align-items-center m-3">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <table className="table m-0 table table-hover">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          onClick={() => setSortBy("DeliveryBoy_Id")}
                        >
                          DeliveryBoy_Id
                          {sortBy === "DeliveryBoy_Id" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => setSortBy("FirstName")}>
                          FirstName
                          {sortBy === "FirstName" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => setSortBy("LastName")}>
                          LastName
                          {sortBy === "LastName" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => setSortBy("Email")}>
                          Email
                          {sortBy === "Email" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col" onClick={() => setSortBy("PhoneNo")}>
                          PhoneNo
                          {sortBy === "PhoneNo" && (
                            <i className={`fa fa-sort-${sortDirection}`} />
                          )}
                        </th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {deliveryBoyList
                        .filter((user) => {
                          return (
                            user.firstName
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            user.lastName
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            user.email
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            user.phoneNo.includes(searchTerm)
                          );
                        })
                        .slice(
                          (currentPage - 1) * itemsPerPage,
                          currentPage * itemsPerPage
                        )
                        .map((user) => (
                          <DeliveryBoyRow user={user} key={user.id} />
                        ))}
                    </tbody>
                  </table>

                  <div className="d-flex justify-content-center mt-3">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mx-2"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mx-2"
                      disabled={indexOfLastItem >= deliveryBoyList.length}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>

                  <div>
                    <Link to="/AddDeliveryBoy">
                      <button type="button" className="btn btn-alert m-3">
                        <u>Add DeliveryBoy</u>
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="btn  btn-alert m-3 ml-2"
                      onClick={exportToCSV}
                      disabled={deliveryBoyList.length === 0}
                    >
                      <u> Export to CSV</u>
                    </button>
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

export default DeliveryBoyList;
