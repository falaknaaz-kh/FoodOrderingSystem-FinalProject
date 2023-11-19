import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar3 from "../../Components/A_navbar";
import { url } from "../../Constants/Url";
import UserRow from "./UserRow";
import { CSVLink } from "react-csv";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(url + "/admin/userList");
      const result = response.data;
      if (result.status === "success") {
        setUsers(result.data);
      } else {
        console.error("Error while loading list of users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phoneNo.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const usersToDisplay = filteredUsers.slice(startIndex, endIndex);

  const csvData = usersToDisplay.map((user) => ({
    Customer_Id: user.id,
    FirstName: user.firstName,
    LastName: user.lastName,
    Email: user.email,
    PhoneNo: user.phoneNo,
  }));

  return (
    <section className="pb-5 header text-center">
      <Navbar3 />
      <h2 className="page-title text-info">
        <b>Customer List Catalog</b>
      </h2>
      <div className="container py-5 text-white">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="card border-0 shadow">
              <div>
                <div className="d-flex justify-content-between align-items-center m-3">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <table className="m-0 table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Customer_Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">PhoneNo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersToDisplay.map((user) => (
                        <UserRow user={user} key={user.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                      </li>
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button className="btn btn-alert m-3">
                  <CSVLink data={csvData} filename={"user-list.csv"}>
                    Export to CSV
                  </CSVLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserList;
