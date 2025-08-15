"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg ">
      <Link href="/" className="flex items-center">
        <Image src={"/logo.png"} alt="TrendLama" width={36} height={36} />
        <p className="hidden  md:block text-md font-medium tracking-wider">
          TRENDLAMA
        </p>
        <p className="text-sm text-gray-400"></p>
        <p></p>
      </Link>
    </footer>
  );
};

export default Footer;
