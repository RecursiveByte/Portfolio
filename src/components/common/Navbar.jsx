import { useRef, useState } from "react";
import { Link } from "react-scroll";
import { NAV_ITEMS } from "@/constants/const.js";
import {
  openMobileMenu,
  closeMobileMenu,
} from "@/animations/homeAnimations/mobileMenuAnimation";
import { navBgAnimation } from "../../animations/homeAnimations/navBgAnimation";
import { useGSAP } from "@gsap/react";
import { navbarIntroAnimation } from "../../animations/homeAnimations/navbarAnimation";

const RESUME_URL =
  "https://drive.google.com/file/d/1EyzSlc6RWRQho9yk7xph9tsrtoKy46qM/view?pli=1";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useGSAP(() => {
    navBgAnimation(navRef);
    navbarIntroAnimation(navRef.current);
  }, []);

  const toggleMenu = () => {
    if (!open) {
      setOpen(true);
      openMobileMenu(menuRef.current);
    } else {
      closeMobileMenu(menuRef.current, () => {
        setOpen(false);
      });
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-white">

        {/* LOGO */}
        <Link
          to="home"
          smooth
          duration={700}
          className="cursor-pointer hover:text-white transition"
        >
          <h1 className="nav-item font-semibold text-xl tracking-widest text-white">
            Retesh
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden sm:flex gap-10 font-medium text-white/80">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="nav-item">
              {item.id === "resume" ? (
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.id}
                  smooth
                  duration={700}
                  offset={item.offset}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button onClick={toggleMenu} className="sm:hidden text-2xl text-white">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className="mobile-menu h-screen overflow-hidden bg-black"
        style={{ maxHeight: 0, opacity: 0 }}
      >
        <ul className="flex flex-col items-center gap-2 py-6 text-white font-medium">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              {item.id === "resume" ? (
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={toggleMenu}
                  className="cursor-pointer text-lg hover:text-white/70 transition"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.id}
                  smooth
                  duration={700}
                  offset={item.offset}
                  onClick={toggleMenu}
                  className="cursor-pointer text-lg hover:text-white/70 transition"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
