import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as notification from "../../Constants/notification";
import { useLocation } from "react-router-dom";

const EditMenu = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const propsData = location.state;
  const [menuId, setMenuId] = useState(propsData.id);
  const [menuName, setMenuName] = useState(propsData.menuName);
  const [imageName, setImageName] = useState(null);
  const [price, setPrice] = useState(propsData.price);
  const [description, setDescription] = useState(propsData.description);

  const changeMenu = () => {
    if (
      menuName.length === 0 ||
      price.length === 0 ||
      description.length === 0
    ) {
      notification.info("Please fill in all fields");
    } else {
      const updatedData = {
        id: menuId,
        menuName: menuName,
        price: price,
        description: description,
      };

      axios
        .post("http://localhost:8080/menu/edit", updatedData)
        .then((response) => {
          const result = response.data;
          if (result.status === "Success") {
            notification.success("Your Menu has been updated successfully!");
            navigate("/menuList");
          } else {
            notification.danger("Edit menu failed");
          }
        })
        .catch((error) => {
          console.error("Error updating menu:", error);
          notification.error("An error occurred while updating the menu");
        });
    }
  };
  const onFileSelect = (event) => {
    setImageName(event.target.files[0]);
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form class="mx-1 mx-md-4">
                      <h2 className="fw-normal mb-3 pb-3">
                        <b>Update Menu</b>
                      </h2>

                      <div className="form-outline mb-4">
                        <input
                          className="text"
                          id="menuName"
                          class="form-control form-control-lg"
                          value={menuName}
                          onChange={(e) => {
                            setMenuName(e.target.value);
                          }}
                        />
                        <label className="form-label" htmlFor="menuName">
                          <b>Menu Name</b>
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="file"
                          accept="image/*"
                          id="image"
                          className="form-control form-control-lg"
                          onChange={onFileSelect}
                        />
                        <label className="form-label" htmlFor="image">
                          <b>Image</b>
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          <b>Price</b>
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          <b>Description</b>
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          onClick={changeMenu}
                          className="btn btn-success"
                          type="button"
                        >
                          Save Changes
                        </button>
                      </div>
                      <div className="pt-1 mb-4">
                        <Link to="/menuList">
                          <button className="btn btn-dark" type="button">
                            Back To Menu List
                          </button>
                        </Link>
                      </div>
                    </form>
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

export default EditMenu;
