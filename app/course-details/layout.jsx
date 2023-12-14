"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import Cart from "@/components/Cart";

function ReviewsLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
export default (ReviewsLayout);
