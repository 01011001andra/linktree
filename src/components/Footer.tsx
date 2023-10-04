import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex items-center gap-4 justify-center py-10">
      <span className="text-xl ">Build with </span>
      <AiFillHeart size={30} color="red" />
      <span>By YourName</span>
    </footer>
  );
};

export default Footer;
