
import React, { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaTools,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const PHONE_DISPLAY = "+91 6281524402";
const PHONE_LINK = "916281524402";
const WHATSAPP_LINK = "916281524402";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = window.location.pathname.toLowerCase();

  const whatsappMessage = encodeURIComponent(
    "Hello Sri Venkateshwara Safety Nets, I would like to enquire about Safety Nets and Invisible Grills."
  );

  const whatsappURL = `https://wa.me/${WHATSAPP_LINK}?text=${whatsappMessage}`;

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "About Us",
      path: "/about",
      icon: <FaInfoCircle />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <FaTools />,
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: <FaEnvelope />,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  const isActive = (path) =>
    currentPath === path ||
    (path !== "/" && currentPath === path + "/");

  return (
    <>
      <style>{`

        .sv-navbar,
        .sv-navbar *,
        .sv-mobile-drawer,
        .sv-mobile-drawer * {
          box-sizing: border-box;
        }

        /* ================= NAVBAR ================= */

        .sv-navbar {
          width: 100%;
          height: 110px;
          background: #ffffff !important;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 10px 4%;
          gap: 25px;

          border-bottom: 4px solid #ff6b18;

          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;

          box-shadow: 0 3px 15px rgba(0,0,0,.07);

          font-family: Arial, Helvetica, sans-serif;
        }

        /* LOGO */

        .sv-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }

        .sv-logo img {
          width: 340px;
          height: 88px;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }

        /* DESKTOP NAVIGATION */

        .sv-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 38px;
          flex: 1;
          min-width: 0;
        }

        .sv-nav-links a {
          color: #06345b !important;
          font-size: 19px;
          font-weight: 700;
          text-decoration: none !important;
          padding: 14px 0;
          position: relative;
          white-space: nowrap;
          transition: color .3s ease;
        }

        .sv-nav-links a::after {
          content: "";
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 0;
          height: 3px;
          background: #ff6b18;
          transition: width .3s ease;
        }

        .sv-nav-links a:hover,
        .sv-nav-links a.active {
          color: #ff6b18 !important;
        }

        .sv-nav-links a:hover::after,
        .sv-nav-links a.active::after {
          width: 100%;
        }

        /* ================= DESKTOP CONTACT BUTTONS ================= */

        .sv-nav-actions {
          display: flex !important;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .sv-navbar .sv-call-btn,
        .sv-navbar .sv-whatsapp-btn {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          gap: 10px;

          min-height: 55px;
          padding: 0 20px;

          border-radius: 40px;
          text-decoration: none !important;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px !important;
          font-weight: 700 !important;

          white-space: nowrap;
          flex-shrink: 0;
          line-height: 1.2;

          transition: all .3s ease;
        }

        /* PHONE BUTTON - NUMBER ALWAYS VISIBLE */

        .sv-navbar .sv-call-btn {
          min-width: 190px;
          background: #06345b !important;
          color: #ffffff !important;
          border: 2px solid #06345b !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .sv-navbar .sv-call-btn svg {
          color: #ffffff !important;
          font-size: 17px;
          flex-shrink: 0;
          display: inline-block !important;
        }

        .sv-navbar .sv-call-btn span {
          display: inline-block !important;
          color: #ffffff !important;
          font-size: 15px !important;
          font-weight: 700 !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        .sv-navbar .sv-call-btn:hover {
          background: #ff6b18 !important;
          border-color: #ff6b18 !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }

        /* WHATSAPP BUTTON */

        .sv-navbar .sv-whatsapp-btn {
          min-width: 210px;
          background: #159b59 !important;
          color: #ffffff !important;
          border: 2px solid #ff6b18 !important;
        }

        .sv-navbar .sv-whatsapp-btn svg,
        .sv-navbar .sv-whatsapp-btn span {
          color: #ffffff !important;
        }

        .sv-navbar .sv-whatsapp-btn:hover {
          background: #087c43 !important;
          border-color: #087c43 !important;
          transform: translateY(-2px);
        }

        /* HAMBURGER */

        .sv-menu-toggle {
          display: none;
          width: 46px;
          height: 46px;
          border: none;
          border-radius: 9px;
          background: #06345b;
          color: white;
          font-size: 21px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sv-menu-toggle:hover {
          background: #ff6b18;
        }

        /* MOBILE OVERLAY */

        .sv-mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,20,40,.65);
          z-index: 10000;
          opacity: 0;
          visibility: hidden;
          transition: .35s ease;
        }

        .sv-mobile-overlay.show {
          opacity: 1;
          visibility: visible;
        }

        /* MOBILE DRAWER */

        .sv-mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 82%;
          max-width: 360px;
          height: 100dvh;
          background: #ffffff;
          z-index: 10001;

          display: flex;
          flex-direction: column;

          padding: 20px;

          transform: translateX(-105%);
          transition: transform .4s cubic-bezier(.22,1,.36,1);

          overflow-y: auto;
          box-shadow: 8px 0 30px rgba(0,0,0,.18);
        }

        .sv-mobile-drawer.open {
          transform: translateX(0);
        }

        /* DRAWER HEADER */

        .sv-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-bottom: 20px;
          border-bottom: 2px solid #ff6b18;
        }

        .sv-drawer-logo img {
          width: 225px;
          max-width: 100%;
          height: 65px;
          object-fit: contain;
        }

        .sv-drawer-close {
          width: 38px;
          height: 38px;
          background: #06345b;
          color: #ffffff;
          border: none;
          border-radius: 50%;
          font-size: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }

        .sv-drawer-close:hover {
          background: #ff6b18;
        }

        /* DRAWER LINKS */

        .sv-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding-top: 25px;
        }

        .sv-drawer-links a {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 16px 14px;
          color: #06345b !important;
          background: #f5f8fb;
          border-radius: 9px;
          text-decoration: none !important;
          font-size: 16px;
          font-weight: 700;
          transition: all .3s ease;
        }

        .sv-drawer-links a svg {
          font-size: 19px;
          color: #ff6b18;
        }

        .sv-drawer-links a:hover,
        .sv-drawer-links a.active {
          background: #06345b;
          color: #ffffff !important;
          transform: translateX(5px);
        }

        .sv-drawer-links a:hover svg,
        .sv-drawer-links a.active svg {
          color: #ff8a35;
        }

        /* DRAWER CONTACT */

        .sv-drawer-contact {
          margin-top: auto;
          padding-top: 25px;
        }

        .sv-drawer-contact h3 {
          color: #06345b;
          font-size: 19px;
          margin-bottom: 15px;
        }

        .sv-drawer-contact a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          min-height: 48px;
          border-radius: 30px;
          margin-bottom: 12px;
          text-decoration: none !important;
          font-size: 15px;
          font-weight: 700;
          transition: .3s ease;
        }

        .sv-drawer-call {
          background: #06345b;
          color: #ffffff !important;
        }

        .sv-drawer-whatsapp {
          background: #159b59;
          color: #ffffff !important;
        }

        .sv-drawer-contact a:hover {
          transform: translateY(-2px);
        }

        .sv-drawer-footer {
          text-align: center;
          color: #06345b;
          font-size: 12px;
          margin-top: 12px;
        }

        /* NAVBAR SPACER */

        .sv-navbar-spacer {
          width: 100%;
          height: 110px;
        }

        /* TABLET / SMALL DESKTOP */

        @media (max-width: 1250px) {

          .sv-navbar {
            padding: 10px 2%;
            gap: 12px;
          }

          .sv-logo img {
            width: 245px;
          }

          .sv-nav-links {
            gap: 17px;
          }

          .sv-nav-links a {
            font-size: 15px;
          }

          .sv-navbar .sv-call-btn,
          .sv-navbar .sv-whatsapp-btn {
            min-height: 50px;
            padding: 0 12px;
            font-size: 12px !important;
            gap: 7px;
          }

          .sv-navbar .sv-call-btn {
            min-width: 165px;
          }

          .sv-navbar .sv-call-btn span {
            font-size: 12px !important;
          }

          .sv-navbar .sv-whatsapp-btn {
            min-width: 175px;
          }
        }

        /* MOBILE / TABLET NAVIGATION */

        @media (max-width: 900px) {

          .sv-navbar {
            height: 85px;
            padding: 8px 4%;
          }

          .sv-navbar-spacer {
            height: 85px;
          }

          .sv-logo img {
            width: 260px;
            height: 65px;
          }

          .sv-nav-links,
          .sv-nav-actions {
            display: none !important;
          }

          .sv-menu-toggle {
            display: flex;
          }
        }

        /* MOBILE */

        @media (max-width: 480px) {

          .sv-navbar {
            height: 75px;
            padding: 7px 12px;
          }

          .sv-navbar-spacer {
            height: 75px;
          }

          .sv-logo img {
            width: 220px;
            height: 58px;
          }

          .sv-menu-toggle {
            width: 42px;
            height: 42px;
            font-size: 19px;
          }

          .sv-mobile-drawer {
            width: 85%;
            padding: 16px;
          }

          .sv-drawer-logo img {
            width: 195px;
          }
        }

        @media (max-width: 350px) {
          .sv-logo img {
            width: 185px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-mobile-drawer,
          .sv-mobile-overlay,
          .sv-nav-links a,
          .sv-call-btn,
          .sv-whatsapp-btn {
            transition: none;
          }
        }

      `}</style>

      {/* FIXED NAVBAR */}

      <header className="sv-navbar">

        {/* LOGO */}

        <a href="/" className="sv-logo">
          <img
            src="/logo.png"
            alt="Sri Venkateshwara Safety Nets and Invisible Grills"
          />
        </a>

        {/* DESKTOP NAVIGATION */}

        <nav className="sv-nav-links">

          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={isActive(link.path) ? "active" : ""}
            >
              {link.name}
            </a>
          ))}

        </nav>

        {/* DESKTOP CONTACT BUTTONS */}

        <div className="sv-nav-actions">

          <a
            href={`tel:+${PHONE_LINK}`}
            className="sv-call-btn"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <FaPhoneAlt />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <a
            href={whatsappURL}
            className="sv-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={21} />
            <span>Chat on WhatsApp</span>
          </a>

        </div>

        {/* MOBILE HAMBURGER */}

        <button
          type="button"
          className="sv-menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <FaBars />
        </button>

      </header>

      {/* NAVBAR SPACER */}

      <div className="sv-navbar-spacer" />

      {/* MOBILE OVERLAY */}

      <div
        className={`sv-mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* MOBILE DRAWER */}

      <aside
        className={`sv-mobile-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >

        {/* DRAWER HEADER */}

        <div className="sv-drawer-header">

          <a
            href="/"
            className="sv-drawer-logo"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Sri Venkateshwara Safety Nets"
            />
          </a>

          <button
            type="button"
            className="sv-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <FaTimes />
          </button>

        </div>

        {/* DRAWER NAVIGATION */}

        <nav className="sv-drawer-links">

          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={isActive(link.path) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
              <FaArrowRight style={{ marginLeft: "auto" }} />
            </a>
          ))}

        </nav>

        {/* DRAWER CONTACT */}

        <div className="sv-drawer-contact">

          <h3>Get In Touch</h3>

          <a
            href={`tel:+${PHONE_LINK}`}
            className="sv-drawer-call"
          >
            <FaPhoneAlt />
            {PHONE_DISPLAY}
          </a>

          <a
            href={whatsappURL}
            className="sv-drawer-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={21} />
            Chat on WhatsApp
          </a>

        </div>

        <div className="sv-drawer-footer">
          Sri Venkateshwara Safety Nets
          <br />
          Protecting Homes, Securing Lives
        </div>

      </aside>

    </>
  );
}

export default Navbar;
