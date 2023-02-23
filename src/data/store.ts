import { proxy } from "valtio";

/**
 * @description Интерфейс объекта товара
 */
export interface IStoreItem {
  id: string;
  name: string;
  price: number;
  count: number;
}

/**
 * @description Прокси состояние с товарами сайта
 */
export const store = proxy<IStoreItem[]>([
  {
    id: '0',
    name: 'Battary',
    price: 20,
    count: 6
  },
  {
    id: '2',
    name: 'Pizza',
    price: 100,
    count: 3
  },
  {
    id: '3',
    name: 'Cake',
    price: 50,
    count: 10
  }
]);