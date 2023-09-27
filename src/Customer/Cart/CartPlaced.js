const CartPlaced = ({ cart, onDelete = () => undefined }) => {
  return (
    <tr>
      <td>{cart?.id}</td>
      <td>{cart?.selectedMenu?.menutype?.menuType}</td>

      <td>{cart?.selectedMenu?.menuName}</td>
      <td>{cart?.quantity}</td>
      <td>{cart?.selectedMenu?.price}</td>

      <td></td>
    </tr>
  );
};

export default CartPlaced;
