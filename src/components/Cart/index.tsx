import { CartControl } from "components/CartControll";
import { cart } from "data/cart";
import { store } from "data/store";
import { useSnapshot } from "valtio";

import s from "./Cart.module.sass";

/**
 * @description Компонент корзины (списка покупок)
 */
export const Cart = () => {
  useSnapshot(store);
  useSnapshot(cart);

  const cartItems = cart.map(item => ({
    ...item,
    item: store.find(storeItem => storeItem.id === item.id)!
  }));

  const total = cartItems.reduce((acc, { count, item }) => {
    return acc + item.price * count;
  }, 0);

  return (
    <div className={s.cart}>
      <h3>Cart</h3>
      <div className={s['cart-items']}>
        {cartItems.length ? (
          <>
            {
              cartItems.map(({ item }) => (
                <div className={s.item}>
                  <p>{item.name} ${item.price}</p>
                  <CartControl item={item} />
                </div>
              ))
            }
          </>
        ) : (
          <>
            <h4>Cart is empty</h4>
          </>
        )}
      </div>
      <p>Total: ${total}</p>
    </div>
  );
};