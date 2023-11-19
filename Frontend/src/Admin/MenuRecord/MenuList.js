import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../../Constants/Url";
import MenuRow from "./MenuRow";
import Navbar3 from "../../Components/A_navbar";
import * as notification from "../../Constants/notification";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 4;

  useEffect(() => {
    console.log(`Menu is loaded`);
    getMenu();
  }, []);

  const getMenu = () => {
    axios.get(url + "/menu/all").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setMenu(result.data);
      } else {
        notification.danger("error while loading list of menu");
      }
    });
  };

  const deleteMenu = async (id) => {
    console.log(id);
    await axios.delete(url + `/menu/delete/${id}`);
    getMenu();
  };

  const downloadCSV = () => {
    const csvRows = [];
    const headers = Object.keys(menu[0]);

    csvRows.push(headers.join(","));

    for (const item of menu) {
      const values = headers.map((header) => item[header]);
      csvRows.push(values.join(","));
    }

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "menu-list.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredMenu = menu.filter((item) =>
    item.menuName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedItems = filteredMenu.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="pb-5 header text-center">
      <Navbar3 />
      <div className="container py-5 text-white">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="card border-0 shadow p-2">
              <div>
                <div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Search Menu"
                      className="form-control"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <table className="table m-0 table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Menu_Id</th>
                        <th scope="col">Menu Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>

                    <tbody>
                      {paginatedItems.map((menuItem) => (
                        <MenuRow
                          key={menuItem.id}
                          menu={menuItem}
                          deleteMenu={() => deleteMenu(menuItem.id)}
                        />
                      ))}
                    </tbody>
                  </table>

                  <div>
                    <Link to="/AddMenuL">
                      <button type="button" className="btn btn-success btn-sm">
                        Add_Menu
                      </button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/HotelMenu">
                      <button type="button" className="btn btn-info btn-sm">
                        Back
                      </button>
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link>
                      <button
                        type="button"
                        className="btn btn-alert btn-sm"
                        onClick={downloadCSV}
                      >
                        Export to CSV
                      </button>
                    </Link>
                  </div>

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
                      disabled={indexOfLastItem >= menu.length}
                      onClick={() => setCurrentPage(currentPage + 1)}
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
    </section>
  );
};

export default Menu;
