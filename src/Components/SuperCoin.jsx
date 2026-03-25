import { useSelector } from "react-redux";

const SuperCoin = () => {
  const cartItems = useSelector(state => state.cart.cartItems) || [];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const superCoins =
    totalAmount >= 300 ? 30 :
    totalAmount >= 200 ? 20 :
    totalAmount >= 100 ? 10 :
    0;

  return (
    <div className="super-coins" style={{ textAlign: 'center' }}>
      <h2 className="super-coins-title">Super Coins</h2> 
      <p className="super-coins-info">
        You will earn {superCoins} super coins with this purchase
      </p>
    </div>
  );
};

export default SuperCoin;