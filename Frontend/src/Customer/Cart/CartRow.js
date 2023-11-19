const CartRow = ({ cart, onDelete = () => undefined }) => {
  return (
    <tr>
      <td>{cart?.id}</td>
      <td>{cart?.selectedMenu?.menutype?.menuType}</td>

      <td>{cart?.selectedMenu?.menuName}</td>
      <td>{cart?.quantity}</td>
      <td>{cart?.selectedMenu?.price}</td>

      <td>
        <button onClick={onDelete} class="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
