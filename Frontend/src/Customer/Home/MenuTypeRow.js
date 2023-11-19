import { url } from "../../Constants/Url";
import { Link } from "react-router-dom";
const MenuTypeRow = ({ menutype }) => {
  const addToCart = (id) => {
    sessionStorage.setItem("menuId", id);
  };
  return (
    <tr>
      <td>{menutype.id}</td>
      <td>{menutype.menuName}</td>
      <td>{menutype.price}</td>
      <td>
        <img
          width="100px"
          height="100px"
          src={url + "/" + menutype.imageName}
          alt=""
          className="imageName-sm"
          border-radius="50%"
        />
      </td>

      <td>{menutype.description}</td>

      <td>
        <Link
          to={{ pathname: "/AddCart", state: { menutypeid: menutype.id } }}
          onClick={() => addToCart(menutype.id)}
        >
          <button type="button" class="btn btn-dark btn-sm">
            Add Cart
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MenuTypeRow;
