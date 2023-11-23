"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardItems from "@/components/CardItems";

import { Input, Button, Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
export default async function CoursesPage() {
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[15rem] object-cover"
          src={`images/coursesbackground.jpg`}
          alt="home page image"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl text-left  font-bold text-white mb-4 mr-auto ml-[4rem] ">
            All Courses
          </h1>
        </div>
      </div>
      <div className="flex md:block justify-center  w-full mx-auto md:ml-[4rem] my-3">
        <Breadcrumbs className="mx-auto">
          <Link href="/home" className="opacity-60">
            Home
          </Link>
          <a href="#" className="opacity-60">
            Courses
          </a>
        </Breadcrumbs>
      </div>
      <CardItems />
    </>
  );
}
