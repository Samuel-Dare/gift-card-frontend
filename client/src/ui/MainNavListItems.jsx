import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useScreenSize } from '../contexts/ScreenSize';
import { useAuth } from '../contexts/AuthContext';

const activeLinkStyle = 'bg-colorGrey100 p-4 md:p-2 text-colorBrand1';

const liStyleFn = (diff = false) => {
  const liStyle1 =
    'p-5 md:border-none md:p-0 hover:text-colorGrey50 transition-transform duration-300 ease-in-out transform hover:translate-y-1 ';

  const liStyle2 = 'border-colorBrand1 border-b w-3/4 md:w-auto';

  return diff ? liStyle1 : `${liStyle1}${liStyle2}`;
};

function MainNavListItems() {
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const { isLoggedIn, logout, user } = useAuth();
  const { isSmallScreen } = useScreenSize();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileImgClicked, setIsProfileImgClicked] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) setMobileMenuOpen(false);
    if (isProfileImgClicked) setIsProfileImgClicked(false);
  };

  const handleLogout = async () => {
    closeMobileMenu();
    await logout();
    navigate('/logout');
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      // Close the menu if it's open and the click is outside the navbar
      if (isMobileMenuOpen && navbarRef.current) closeMobileMenu;
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const handleClick = () => {
    setIsProfileImgClicked(!isProfileImgClicked);
  };

  return (
    <div
      onClick={closeMobileMenu}
      className={`border-colorBrand2 md:flex md:justify-between`}
    >
      <div
        className={
          isMobileMenuOpen ? 'absolute h-screen w-screen' : 'md:hidden'
        }
      ></div>

      {/* Mobile Menu Icon */}
      <div className="text-right md:hidden">
        <button className="focus:outline-none" onClick={toggleMobileMenu}>
          <FaBars />
        </button>
      </div>

      {/* Navigation Menu (Hidden on Small Screens) */}
      <ul
        ref={navbarRef}
        className={`${
          isSmallScreen && isMobileMenuOpen
            ? 'from-colorBrand1 to-colorBrand3 border-colorBrand1 divide-colorBrand1 fixed left-0 top-0 z-50 h-screen  w-2/3 space-y-5 divide-y-4 overflow-y-auto border-y-2 bg-colorGrey50 bg-gradient-to-br via-colorBrand2 text-left opacity-95'
            : 'hidden'
        } md:flex md:w-full md:justify-between`}
      >
        <div
          className={`${
            isSmallScreen && isMobileMenuOpen ? '' : 'flex space-x-4 '
          }`}
        >
          <li className={liStyleFn()}>
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? activeLinkStyle : '')}
            >
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li className={liStyleFn()}>
                <NavLink
                  to="/sell-gift-card"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? activeLinkStyle : ''
                  }
                >
                  Sell Gift Card
                </NavLink>
              </li>
              <li className={liStyleFn()}>
                <NavLink
                  to="/orders"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? activeLinkStyle : ''
                  }
                >
                  My Orders
                </NavLink>
              </li>
            </>
          )}
          <li className={liStyleFn()}>
            <NavLink
              to="/balance"
              onClick={closeMobileMenu}
              className={({ isActive }) => (isActive ? activeLinkStyle : '')}
            >
              Check Balance
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li className={liStyleFn()}>
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className={({ isActive }) => (isActive ? activeLinkStyle : '')}
              >
                Contact Us
              </NavLink>
            </li>
          )}
        </div>
        <div
          className={`${
            isSmallScreen && isMobileMenuOpen ? '' : 'flex space-x-4'
          }`}
        >
          {!isLoggedIn && (
            <>
              {' '}
              <li className={liStyleFn()}>
                <NavLink
                  to="/register"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? activeLinkStyle : ''
                  }
                >
                  Register
                </NavLink>
              </li>
              <li className={liStyleFn()}>
                <NavLink
                  to="/login"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    isActive ? activeLinkStyle : ''
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              {isSmallScreen ? (
                <>
                  <li className={liStyleFn()}>
                    <NavLink
                      to="/profile"
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        isActive ? activeLinkStyle : ''
                      }
                    >
                      My Profile
                    </NavLink>
                  </li>

                  <li className={liStyleFn()}>
                    <NavLink
                      onClick={handleLogout}
                      className={({ isActive }) =>
                        isActive ? activeLinkStyle : ''
                      }
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <div className="relative">
                  <div
                    className="flex items-center gap-2 text-[15px]"
                    onClick={handleClick}
                  >
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                    <img
                      src="assets/default.jpg"
                      alt="Profile-img"
                      className="cursor-pointer rounded-full"
                      width={30}
                    />
                  </div>

                  {isProfileImgClicked && (
                    <ul className="to-colorBrand3 from-colorBrand1 absolute right-0 top-10 space-y-2 rounded-md bg-gradient-to-br via-colorBrand2 px-2 py-4 transition-all delay-100 ease-in-out hover:-translate-y-1 hover:space-y-3">
                      <li className={liStyleFn()}>
                        <NavLink
                          to="/profile"
                          onClick={closeMobileMenu}
                          className={({ isActive }) =>
                            isActive ? activeLinkStyle : ''
                          }
                        >
                          Profile
                        </NavLink>
                      </li>

                      <li className={liStyleFn()}>
                        <NavLink
                          onClick={handleLogout}
                          className={({ isActive }) =>
                            isActive ? activeLinkStyle : ''
                          }
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </ul>
    </div>
  );
}

export default MainNavListItems;
