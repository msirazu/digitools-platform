import { toast } from "react-toastify";
import Cart from "./Cart";

const Carts = ({ cart, setCart }) => {

    const handleCheckout = () => {
        setCart([]);
        toast.success('payment successful');
    }

    const handleCartRemove = (item) => {
        const filteredData = cart.filter(newData => newData != item);
        setCart(filteredData);
        toast.error('removed successfully');
    }

  return (
    <div className="border space-y-5 border-gray-200 p-5 rounded-xl">
      <section>
        <h2 className="font-bold text-xl text-center">Your Cart</h2>
      </section>
      <section>
        {cart.length === 0 ? <div className="flex flex-col justify-center items-center space-y-2 bg-gray-50 p-5 rounded-lg">
            <h4 className="font-bold">Cart is Empty</h4>
            <p className="text-small">please add products</p>
        </div> : <div className="flex flex-col gap-3">
          {cart.map(cartData => <Cart key={cartData.id} cartData={cartData} cart={cart} handleCartRemove={handleCartRemove}/>)}
          <div className="flex justify-between">
            <p>Total:</p>
            <p>$ 70</p>
          </div>
          <button onClick={handleCheckout} className="btn-one">Proceed To Checkout</button>
        </div>}
        
      </section>
    </div>
  );
};

export default Carts;
