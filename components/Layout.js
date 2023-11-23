"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Image,
} from "@/components/material-tailwind";
import LanguageSwitcher from "./LanguageSwitcher";

import Cart from "./Cart";
import { usePathname, useRouter } from "next/navigation";
export default function Layout() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href) => {
    console.log(router);
    return pathname === href;
  };

  const navList = (
    <ul className="text-lg mb-4 text-white mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/home">
          <div
            className={`flex items-center transition-all duration-150 ${
              isActive("/home") ? "text-orange-300" : "hover:text-orange-300"
            }`}
          >
            Home
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/courses">
          <div
            className={`flex items-center transition-all duration-150 ${
              isActive("/courses") ? "text-orange-300" : "hover:text-orange-300"
            }`}
          >
            Courses
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/blog">
          <div
            className={`flex items-center transition-all duration-150 ${
              isActive("/blog") ? "text-orange-300" : "hover:text-orange-300"
            }`}
          >
            Blog
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/about">
          <div
            className={`flex items-center transition-all duration-150 ${
              isActive("/about") ? "text-orange-300" : "hover:text-orange-300"
            }`}
          >
            About Us
          </div>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lg"
        color="white"
        className="p-1 font-normal"
      >
        <Link href="/contactUs">
          <div
            className={`flex items-center transition-all duration-150 ${
              isActive("/contactUs")
                ? "text-orange-300"
                : "hover:text-orange-300"
            }`}
          >
            Contact Us
          </div>
        </Link>
      </Typography>
    </ul>
  );
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <div>
      <Navbar
        color="brown"
        className=" bg-black text-white sticky inset-0 z-30 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between ">
          <Typography
            as="div"
            href="#"
            className="mr-4 cursor-pointer  font-medium text-2xl tracking-wide "
          >
            <div className="flex items-center ">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                <img
                  src={`../images/Alkhabir.jpg`}
                  alt="Alkhabir"
                  className="w-full h-full object-cover "
                />
              </div>{" "}
              <div className="mr-4 hidden lg:block">{navList}</div>
            </div>
          </Typography>
          <div className="flex items-center space-x-3">
            <Cart />

            <LanguageSwitcher />

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
}
