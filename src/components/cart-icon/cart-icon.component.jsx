import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

import { ShoppingIcon, ItemCount, CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
