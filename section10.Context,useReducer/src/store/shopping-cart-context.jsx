import { createContext } from "react";

/**
 * 실제로 사용되지 않지만 자동완성을 위해 작성된 코드
 */
export const CartContext = createContext({
  items: [],
  onAddToCart : (item) => {},
  onUpdateCartItemQuantity : (ProductId, amount) => {},
});
