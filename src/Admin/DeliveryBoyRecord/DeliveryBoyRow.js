import { url } from "../../Constants/Url";
import axios from "axios";
import { toast } from "react-toastify";
const DeliveryBoyRow = ({ user }) => {
  const deleteDeliveryBoy = async (id) => {
    await axios.delete(url + `/user/delete/${user.id}`);
    toast.error("Successfully deleted an deliveryBoy");
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td> {user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNo}</td>

      <td>
        <button
          onClick={() => deleteDeliveryBoy(user.id)}
          class="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
      <td></td>
    </tr>
  );
};

export default DeliveryBoyRow;
