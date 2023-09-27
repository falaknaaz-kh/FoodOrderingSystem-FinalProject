import { Link } from "react-router-dom";

const MenuTypeRow = ({ menutype }) => {
  return (
    <tr>
      <td>{menutype.id}</td>
      <td>{menutype.menuType}</td>
      <td>
        <Link to="/AddMenuL">
          <button type="button" class="btn btn-success btn-sm">
            Add_Menu
          </button>
        </Link>
      </td>
      <td></td>
    </tr>
  );
};

export default MenuTypeRow;
