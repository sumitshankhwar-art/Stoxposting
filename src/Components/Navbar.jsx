import { Link } from "react-router-dom";
import { TextAlignJustify, X } from "lucide-react";
import { useState ,useEffect} from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(true);
    const timeout = setTimeout(() => setFlash(false), 400); 
    return () => clearTimeout(timeout);
  }, [location.pathname]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
     <div
      className={`p-3 flex justify-between items-center border-b-[5px] border-[#9DB1BF] h-[95px] transition-colors duration-300 ${
        flash ? "bg-white" : "bg-[#0E2E47]"
      }`}
    >
      <Link to="/home" className="text-amber-50">
        {/* <h1 className="text-amber-50 text-2xl ">STOX</h1> */}
      </Link>
      {/* nav menu */}
      <div className="hidden md:flex items-center justify-center flex-grow">
        <div className="gap-6 text-[17px] font-extrabold text-white">
          <Link to="/home" className="hover:text-amber-500 leading-13 px-2">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-500 leading-13 px-2">
            About Us
          </Link>
          <Link to="/services" className="hover:text-amber-500 leading-13 px-2">
            Our Services
          </Link>
          <Link
            to="/difference"
            className="hover:text-amber-500 leading-13 px-2"
          >
            The STOX difference
          </Link>
          <Link
            to="/salescalender"
            className="hover:text-amber-500 leading-13 px-2"
          >
            Sales Calendar
          </Link>
          <Link
            to="/contact"
            className="hover:text-amber-500 leading-13 px-2 flex-shrink-0"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0E2E47] z-50 flex flex-col items-center justify-start pt-10 md:hidden">
          <div className="flex justify-end w-full pr-4">
            <X className="text-white cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className="flex flex-col items-center gap-4 text-[17px] text-white mt-10 font-serif">
            <Link
              to="/home"
              className="hover:text-amber-500 text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-amber-500"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="hover:text-amber-500"
              onClick={toggleMenu}
            >
              Our Services
            </Link>
            <Link
              to="/difference"
              className="hover:text-amber-500"
              onClick={toggleMenu}
            >
              The STOX difference
            </Link>
            <Link
              to="/salescalender"
              className="hover:text-amber-500"
              onClick={toggleMenu}
            >
              Sales Calendar
            </Link>
            <Link
              to="/contact"
              className="hover:text-amber-500"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <div className="p-2 md:hidden " onClick={toggleMenu}>
        <TextAlignJustify className="text-white cursor-pointer" />
      </div>
    </div>
  );
};
