import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bottom-0 text-center m-auto max-w-3/4 border-t-2 bg-primary border-[#989898] py-2 text-sm">
      <p>Roccket Power Tech © 2025</p>
      <div className="flex justify-center gap-x-10 mt-[10px]">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;
