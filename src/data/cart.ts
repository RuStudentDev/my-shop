import { proxy } from "valtio";

/**
 * @description Интерфейс объекта корзины
 */
interface ICartItem {
  id: string;
  count: number;
}

/**
 * @description Прокси состояние корзины
 */
export const cart = proxy<ICartItem[]>([]);