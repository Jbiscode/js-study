import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

/**
 * 실제로 사용되지 않지만 자동완성을 위해 작성된 코드
 */
export const CartContext = createContext({
  items: [],
  onAddToCart: (item) => {},
  onUpdateCartItemQuantity: (ProductId, amount) => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    return {
      ...state, // 지금은 items만 가지고있어서 필요없지만 나중에 다른 state가 추가될 수 있음
      items: updatedItems,
    };
  } else if (action.type === "UPDATE") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}
export default function CartContextProvider(props) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE",
      payload: {
        productId,
        amount,
      },
    });
  }
  const contextValue = {
    items: shoppingCartState.items,
    onAddToCart: handleAddItemToCart,
    onUpdateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}
