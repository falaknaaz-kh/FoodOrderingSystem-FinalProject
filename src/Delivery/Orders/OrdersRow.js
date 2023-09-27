import { Link } from "react-router-dom";
const OrdersRow = ({ order }) => {
  return (
    <tr>
      <td>{order.order.id}</td>
      <td>
        {order.order.customer.firstName}
        {order.order.customer.lastName},{order.order.customer.phoneNo}
      </td>
      <td>
        {order.order.deliveryAddress.addressLine1} ,
        {order.order.deliveryAddress.addressLine2},
        {order.order.deliveryAddress.city},{order.order.deliveryAddress.pinCode}
        .
      </td>
      <td>{order?.order?.totalPrice}</td>
      <td>
        {order?.payment?.status === "COMPLETED" ? (
          order?.payment?.status
        ) : (
          <Link to={`/AssignOrder/${order.order.id}`}>
            <button type="button" class="btn btn-dark btn-sm">
              Select Order
            </button>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
