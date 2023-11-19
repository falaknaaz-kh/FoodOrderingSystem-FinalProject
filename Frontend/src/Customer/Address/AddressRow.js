import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../Constants/Url";
import * as notification from "../../Constants/notification";
const AddressRow = ({ addresse }) => {
  const deleteAddress = async (id) => {
    await axios.delete(url + `/address/delete/${addresse.id}`);
    notification.success("successfully deleted an menu");
  };
  return (
    <tr>
      <td>{addresse.addressLine1}</td>
      <td>{addresse.addressLine2}</td>
      <td>{addresse.city}</td>
      <td>{addresse.state}</td>
      <td>{addresse.country}</td>
      <td>{addresse.pinCode}</td>

      <td>
        <Link
          to=""
          class="btn btn-danger btn-sm"
          onClick={() => deleteAddress(addresse.id)}
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default AddressRow;
