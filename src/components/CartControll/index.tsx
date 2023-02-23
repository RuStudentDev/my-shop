import { cart } from "data/cart";
import { IStoreItem } from "data/store";
import { FC, useCallback, useMemo } from "react";
import { useSnapshot } from "valtio";

import s from "./CartControll.module.sass";

/**
 * @description Компонент управление товаром в корзине
 */
export const CartControl: FC<{ item: IStoreItem; }> = ({ item }) => {
  useSnapshot(item);
  useSnapshot(cart);

  const cartItem = useMemo(() => {
    return cart.find(cartItem => item.id === cartItem.id);
  }, [item.id, cart.length]);

  const appendItem = useCallback(() => {
    if (!cartItem) {
      cart.push({ id: item.id, count: 1 });
      return;
    }

    cartItem.count++;
  }, [cartItem, item.id]);

  const removeItem = useCallback(() => {
    if (!cartItem) return;

    cartItem.count--;

    if (cartItem.count <= 0) {
      const index = cart.findIndex(item => item.id === cartItem.id);
      if (index !== -1) cart.splice(index, 1);
    }

  }, [cartItem, item.id]);

  const isTotal = cartItem ? cartItem.count >= item.count : false;

  return (
    <div className={s['cart-controll']}>
      {cartItem ? (
        <>
          <button onClick={removeItem}>-</button>
          <span data-grow>{cartItem.count}</span>
          <button onClick={appendItem} disabled={isTotal}>+</button>
        </>
      ) : (
        <button data-grow onClick={appendItem}>Add cart</button>
      )}
    </div >
  );
};