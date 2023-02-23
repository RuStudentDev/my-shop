import { CartControl } from "components/CartControll";
import { IStoreItem } from "data/store";
import { FC } from "react";
import { useSnapshot } from "valtio";

import s from "./Item.module.sass";

/**
 * @description Компонент одного товара товаров
 */
export const Item: FC<{ item: IStoreItem; }> = ({ item }) => {
  useSnapshot(item);

  return (
    <div className={s.item}>
      <p>{item.id} {item.name} ({item.count}) ${item.price}</p>
      <CartControl item={item} />
    </div>
  );
};