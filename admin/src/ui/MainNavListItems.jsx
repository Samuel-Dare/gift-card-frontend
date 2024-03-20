import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useScreenSize } from "../contexts/ScreenSize";

const liStyle = "border-colorBrand border-b p-5 md:border-none md:p-0";
const activeLinkStyle = "bg-colorBrand p-4 md:p-2 text-colorGrey50";

function MainNavListItems() {
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isSmallScreen } = useScreenSize();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) setMobileMenuOpen(false);
  };
  // const toggleDropdown = () => {
  //   setIsServiceDropdownOpen(!isServiceDropdownOpen);
  // };

  useEffect(() => {
    // console.log(isMobileMenuOpen);
    // console.log(navbarRef.current);
    const handleOutsideClick = () => {
      // Close the menu if it's open and the click is outside the navbar
      if (isMobileMenuOpen && navbarRef.current) closeMobileMenu;
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      onClick={closeMobileMenu}
      className={`${isSmallScreen && isMobileMenuOpen ? "text-colorGrey900" : "text-colorGrey0"} border-colorBlue100 w-full text-right md:flex md:justify-between`}
    >
      {/* Mobile Menu Icon */}
      <button
        className="focus:outline-none md:hidden"
        onClick={toggleMobileMenu}
      >
        <FaBars />
      </button>

      <div
        className={isMobileMenuOpen ? "absolute z-10 h-screen w-full" : ""}
      ></div>

      {/* Navigation Menu (Hidden on Small Screens) */}
      <ul
        ref={navbarRef}
        className={`${
          isSmallScreen && isMobileMenuOpen
            ? "absolute left-0 top-0 h-screen w-2/3 space-y-5 border-y-2 border-colorBrand bg-colorGrey50 p-5 text-left opacity-95"
            : "hidden"
        }  md:flex md:gap-7 `}
      >
        <li className={liStyle}>
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : "")}
          >
            Home
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink
            to="/my-card"
            onClick={closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : "")}
          >
            My Card
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink
            to="/profile"
            onClick={closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : "")}
          >
            My Profile
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink
            to="/contact-us"
            onClick={closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : "")}
          >
            Contact Us
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink
            to="/check-my-balance"
            onClick={closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : "")}
          >
            Check My Balance
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : "")}
          >
            Contact
          </NavLink>
        </li>
        <li className={liStyle}>
          <NavLink
            to="/logout"
            onClick={closeMobileMenu}
            className={({ isActive }) => (isActive ? activeLinkStyle : "")}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNavListItems;
