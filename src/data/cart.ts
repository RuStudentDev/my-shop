import { proxy } from "valtio";

interface ICartItem {
  id: string;
  count: number;
}

export const cart = proxy<ICartItem[]>([]);