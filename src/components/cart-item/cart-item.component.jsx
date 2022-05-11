import {CartItemContainer,ItemDetails} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <sapn className="price">
          {quantity} x ${price}
        </sapn>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
