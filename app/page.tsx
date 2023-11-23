"use client";
import Heading from "@/components/Heading";
import { orbitron } from "@/components/fonts";
import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardItems from "@/components/CardItems";

import { Input, Button } from "@material-tailwind/react";
export default async function HomePage() {
  return (
    <>
      <div className="relative">
        <img
          className="w-full h-[35rem] object-cover"
          src={`images/homepage.png`}
          alt="home page image"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Invest in yourself
          </h1>
          <p className="text-white text-xl max-w-2xl mb-8">
            If you are looking for great and distinctive training courses that
            help you improve your skills growing in your favorite field or
            hobby, you're in the right place!
          </p>
          <div className="flex items-center justify-center mb-8 text-white">
            <Input
              type="text"
              color="white"
              size="lg"
              label="Type course name"
              className="relative rounded-l-md rounded-r-none  w-[30rem] h-[3rem] !text-white !border-r-0 !placeholder-white text-xl"
              crossOrigin="anonymous"
              labelProps={{ color: "white" }}
            />
            <Button
              color="light-blue"
              size="lg"
              ripple={true}
              className="rounded-r-md rounded-l-none w-12 h-[3rem] transform -translate-x-4  translate-y-[.1rem] flex items-center justify-center text-white"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </div>
      </div>
      <CardItems />
    </>
  );
}
