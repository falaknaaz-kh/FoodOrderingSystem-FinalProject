import "../Home/customerHome.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Constants/Url";
import { useAuthContext } from "../../contexts/AuthContext";
import { catgories } from "../../Constants/categories";

export const CloudCategory = ({ category = "", onBack = () => undefined }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    (async () => {
      axios
        .get(url + `/menu/all/${category + 1}`)
        .then((response) => {
          const result = response?.data;
          if (result?.status === "success") {
            console.log(result?.data);
            setMenus(result.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [category]);

  const addToCart = async (id) => {
    const data = {
      menuId: id,
      userId: user?.id,
      quantity: 1,
    };
    axios
      .post(url + "/cart/add", data)
      .then((response) => {
        const result = response.data;
        if (result?.status === "success") {
          navigate("/addcart");
        }
      })
      .catch((error) => undefined);
  };

  return (
    <div className="m-4 text-light">
      <div className="d-flex">
        <h3 className="text-4" onClick={onBack} style={{ cursor: "pointer" }}>
          <i class="bi bi-arrow-left-circle-fill"></i>
        </h3>
        <h3 className="ms-4">{catgories[category]}</h3>
      </div>
      <div className="m-4">
        {menus.map((item) => {
          return (
            <div key={item?.id} className="m-2" style={{ float: "left" }}>
              <div
                className="anchordiv"
                style={{ cursor: "pointer" }}
                onClick={() => addToCart(item.id)}
              >
                <div>
                  <img
                    src={url + "/" + item?.imageName}
                    className="anchorimages"
                  />
                </div>
                <h6>{item?.menuName}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
