"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Drawer, Button, Typography, IconButton } from "./material-tailwind";
import { useSelector } from "react-redux";

const Cart = () => {
  const [open, setOpen] = React.useState(false);
  const userState = useSelector((state) => state.user);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  console.log(userState)

  return (
    <div className="relative">
      <div className="flex items-center">
        <IconButton
          variant="text"
          ripple={false}
          onClick={openDrawer}
          className="z-10"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="h-6 w-6 text-white duration-150 group-hover:text-orange-300"
          />
        </IconButton>
        {userState.totalItems > 0 && (
          <div
            className="hover:cursor-pointer absolute z-30 right-0 top-0 ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
            onClick={openDrawer}
          >
            {userState.totalItems}
          </div>
        )}
        {/* <span className="text-white ml-1">ر.س</span> */}
      </div>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Cart Items
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
