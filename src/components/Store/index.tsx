import { Item } from "components/Item";
import { store } from "data/store";
import { FormEventHandler } from "react";
import { useCallback, useMemo, useState } from "react";
import { useSnapshot } from "valtio";

import s from "./Store.module.sass";

export const Store = () => {
  const [state, setState] = useState('');
  useSnapshot(store);

  const filteredStore = useMemo(() => {
    const regExp = new RegExp(`^${state}`, 'i');

    return store.filter(item => (false
      || !state
      || regExp.test(item.name)
      || regExp.test(item.price + '')
    ));
  }, [state, store.length]);

  const onInput = useCallback<FormEventHandler>((e) => {
    if (e.target instanceof HTMLInputElement) {
      setState(e.target.value);
    }
  }, []);

  return (
    <div className={s.store}>
      <h4>Store</h4>
      <input onInput={onInput} placeholder="Search" />
      {
        filteredStore.map(item => (
          <Item item={item} key={item.id} />
        ))
      }
    </div>
  );
};