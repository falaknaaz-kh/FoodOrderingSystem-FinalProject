import { url } from "../../Constants/Url";
import { Link } from "react-router-dom";

const MenuRow = ({ menu, deleteMenu = () => undefined }) => {
  return (
    <tr>
      <td>{menu.id}</td>
      <td>{menu.menuName}</td>
      <td>{menu.price}</td>
      <td>
        <img
          width="100px"
          height="100px"
          src={url + "/" + menu.imageName}
          alt=""
          className="imageName-sm"
        />
      </td>

      <td>{menu.description}</td>

      <td>
        <Link to="/EditMenu" state={menu}>
          <button type="button" class="btn btn-primary btn-sm">
            Edit
          </button>
        </Link>
      </td>
      <td>
        <button class="btn btn-danger btn-sm" onClick={deleteMenu}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MenuRow;
