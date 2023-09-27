import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../../Constants/Url";
import MenuTypeRow from "../MenuRecord/MenuTypeRow";
import * as notification from "../../Constants/notification";

const MenuType = () => {
  const [menuType, setMenuType] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    getMenuType();
  }, []);

  const getMenuType = () => {
    axios.get(url + `/menutype/all`).then((response) => {
      const result = response.data;
      console.log(result);
      if (result.status === "success") {
        setMenuType(result?.data);
      } else {
        notification.danger("error while loading list of menutypes");
      }
    });
  };

  const totalPages = Math.ceil(menuType.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPreviousPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div>
      <div className="col-md-6 mx-auto">
        <table className="table m-0 text-white ">
          <thead>
            <tr>
              <th scope="col">MenuType_Id</th>
              <th scope="col">MenuType_Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {menuType.slice(startIndex, endIndex).map((menutype) => {
              return (
                <MenuTypeRow key={menutype.MenuType_Id} menutype={menutype} />
              );
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center mt-3">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a href="/HotelMenu" className="btn btn-danger m-3">
            Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuType;
