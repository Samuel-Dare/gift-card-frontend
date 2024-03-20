import { FaFacebook, FaInstagram, FaTwitter, FaAngleUp } from 'react-icons/fa';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-10 text-colorBrand2 md:mt-20">
      <div className="flex items-center justify-between ">
        <ul className="flex gap-5 text-xl md:text-2xl">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </ul>

        <div
          className="cursor-pointer rounded-full border-2"
          onClick={handleScrollToTop}
        >
          <FaAngleUp className="text-xl md:text-2xl" />
        </div>
      </div>
      <div className="my-7 w-full border-t-2"></div>
      <p className="text-center md:text-lg">
        &copy; {new Date().getFullYear()} Gift Card. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
