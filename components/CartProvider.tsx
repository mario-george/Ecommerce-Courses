"use client";
import { Provider } from "react-redux";
import { store } from "@/components/store/store";
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};
export default CartProvider;
