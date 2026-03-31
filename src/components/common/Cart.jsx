const Cart = ({ cartData, handleCartRemove }) => {
    const {icon, name, price} = cartData;
  return (
    <div className="flex gap-5 items-center justify-between border p-5 border-gray-100 rounded-md"
    >
      <div className="flex items-center gap-5 justify-center">
        <span>{icon}</span>
        <div className="flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <p>$ {price}</p>
        </div>
      </div>
      <button onClick={() => handleCartRemove(cartData)} className="btn">Remove</button>
    </div>
  );
};

export default Cart;
