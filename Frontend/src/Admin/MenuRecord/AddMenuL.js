import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../Constants/Url";
import { useEffect } from "react";
import * as notification from "../../Constants/notification";
import { toast } from "react-toastify";

const AddMenu = () => {
  const [imageName, setImageName] = useState(undefined);
  const [menuName, setMenuName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [menutypeId, setMenuTypeId] = useState("0");

  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onFileSelect = (event) => {
    setImageName(event.target.files[0]);
  };

  useEffect(() => {}, [data]);

  const addMenu = () => {
    console.log(menutypeId);
    if (menuName.length === 0) {
      notification.info("select menu name");
    } else if (price.length === 0) {
      notification.info("select price");
    } else if (!imageName) {
      notification.info("select Image");
    } else if (description.length === 0) {
      notification.info("Enter description ");
    } else {
      const data = new FormData();

      data.append("menuName", menuName);
      data.append("price", price);
      data.append("imageName", imageName);
      data.append("description", description);

      axios.post(url + `/menu/add/${menutypeId}`, data).then((response) => {
        const result = response.data;
        if (result.status === "success") {
          toast.success("successfully added an menu");
          navigate("/MenuList");
        } else {
          toast.success("successfully added an menu");
          navigate("/MenuList");
        }
      });
    }
  };

  return (
    <div class="col-md-5 mx-auto py-3 text-info">
      <h2 className="page-title">
        <b>Add Menu</b>
      </h2>

      <div className="mb-3">
        <input
          onChange={(e) => {
            setMenuName(e.target.value);
          }}
          type="text"
          placeholder="Enter the menu name"
          className="form-control"
        />
        <label htmlFor="">
          <b>Menu Name</b>
        </label>
      </div>
      <div className="mb-3">
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          placeholder="Enter the price"
          className="form-control"
        />
        <label htmlFor="">
          <b>Price</b>
        </label>
      </div>

      <div className="mb-3">
        <input
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
        <label htmlFor="">
          <b>Image</b>
        </label>
      </div>
      <div class="form-group">
        <label for="demo_overview"></label>
        <select
          class="form-control"
          data-role="select-dropdown"
          onChange={(e) => {
            setMenuTypeId(e.target.value);
          }}
        >
          <option value="">Select MenuType </option>
          <option value="1">Nonveg</option>
          <option value="2">Veg</option>
          <option value="3">Chinees </option>
          <option value="4">SouthIndian</option>
          <option value="5">Sweets</option>

          <option value="6">Thali</option>
          <option value="7">Rice</option>
          <option value="8">Roti</option>
        </select>
        <label htmlFor="">
          <b>Menu Type</b>
        </label>
      </div>

      <div className="mb-3">
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Enter the description"
          className="form-control"
        />
        <label htmlFor="">
          <b>Description</b>
        </label>
      </div>
      <div className="mb-3">
        <button onClick={addMenu} className="btn btn-success me-3">
          Add
        </button>

        <Link to="/menuList">
          <a className="btn btn-warning">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default AddMenu;
