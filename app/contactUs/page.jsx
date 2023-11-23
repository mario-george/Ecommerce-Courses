"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import InfoCard from "@/components/InfoCard";

export default function ContactUs() {
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[20rem] object-cover"
          src={`images/contact.webp`}
          alt="home page image"
        />
      </div>
        <div className="flex flex-col justify-center items-center text-center bg-transparent rounded-lg my-3">
          <Breadcrumbs>
            <Link href="/home" className="opacity-60">
              Home
            </Link>
            <a href="#" className="opacity-60">
              Contact Us
            </a>
          </Breadcrumbs>
        </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-x-3 mt-[2rem]">
        <InfoCard
          title="Address"
          description="حي بني حارثة شارع محمد بن عبد العزيز المدينة المنورة"
          image={"l"}
        />
        <InfoCard title="Email" description="mail@mail.com" image={"e"} />
        <InfoCard title="Contact us" description="+20123456789" image={"c"} />
      </div>
    </>
  );
}
