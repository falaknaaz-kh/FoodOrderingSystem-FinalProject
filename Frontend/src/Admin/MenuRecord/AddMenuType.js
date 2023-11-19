import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as notification from "../../Constants/notification";
const AddMenuType = () => {
  const [menuType, setMenuType] = useState("");

  const navigate = useNavigate();

  const addMenuType = () => {
    if (menuType.length === 0) {
      notification.info("select menuType name");
    } else {
      const data = new FormData();

      data.append("menuType", menuType);

      axios
        .post("http://localhost:8080/menutype/add", data)
        .then((response) => {
          const result = response.data;
          if (result.status === "success") {
            notification.success("successfully added an menuType");
            navigate("/MenuTypeList");
          } else {
            notification.danger("error while adding menuType");
          }
        });
    }
  };

  return (
    <div>
      <h1 className="page-title">Add MenuType</h1>

      <div className="mb-3">
        <label htmlFor="">Menu Type</label>
        <input
          onChange={(e) => {
            setMenuType(e.target.value);
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addMenuType} className="btn btn-success">
          Add
        </button>

        <Link to="/menuTypeList">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default AddMenuType;
