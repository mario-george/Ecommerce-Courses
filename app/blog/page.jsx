"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Breadcrumbs,
} from "@material-tailwind/react";
import BlogCard from "../../components/BlogCard";
import Link from "next/link";
export default function HorizontalCard() {
  return (
    <div className="flex flex-col space-y-3 w-full items-center my-6 ">

        <div className="mx-auto md:mr-auto md:ml-[12rem]">


            <Breadcrumbs className="">
            <Link href="/home" className="opacity-60">
              Home
            </Link>
            <a href="#" className="opacity-60">
              blog 
            </a>
          </Breadcrumbs>
        </div>
      <BlogCard
        image="images/Autocad.webp"
        name="AutoCad"
        description={`  AutoCAD is a computer-aided design software developed by the company
          Autodesk (hence the name AutoCAD). It allows you to draw and edit
          digital 2D and 3D designs more quickly and easily than you could by
          hand.`}
        title={`          What is Autocad?
          `}
      />
         <BlogCard
        image="images/Autodesk.jpg"
        name="Autodesk"
        description={`  AutoCAD is a computer-aided design software developed by the company
          Autodesk (hence the name AutoCAD). It allows you to draw and edit
          digital 2D and 3D designs more quickly and easily than you could by
          hand.`}
        title={`          What is Autodesk?
          `}
      />
    </div>
  );
}
