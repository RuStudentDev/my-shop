import { Cart } from "components/Cart";
import { Store } from "components/Store";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')!)
  .render(
    <>
      <Store />
      <Cart />
    </>
  );