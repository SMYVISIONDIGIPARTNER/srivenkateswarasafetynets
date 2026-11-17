
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function App() {
  const currentPath = window.location.pathname.toLowerCase();

  let Page = Home;

  if (currentPath === "/about" || currentPath === "/about/") {
    Page = About;
  } else if (
    currentPath === "/services" ||
    currentPath === "/services/"
  ) {
    Page = Services;
  } else if (
    currentPath === "/contact" ||
    currentPath === "/contact/"
  ) {
    Page = Contact;
  }

  const PHONE = "916281524402";
  const WHATSAPP = "916281524402";

  return (
    <>
      <style>{`
        .floating-contact-buttons {
          position: fixed;
          right: 22px;
          bottom: 25px;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .floating-contact-btn {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          font-size: 25px;
          text-decoration: none;
          box-shadow: 0 5px 18px rgba(0,0,0,0.22);
          transition: all 0.3s ease;
          animation: floatingPulse 2s infinite;
        }

        .floating-whatsapp {
          background: #20c767;
        }

        .floating-call {
          background: #06345b;
        }

        .floating-contact-btn:hover {
          transform: scale(1.12) translateY(-3px);
          color: #fff;
        }

        .floating-whatsapp:hover {
          background: #159b4d;
        }

        .floating-call:hover {
          background: #ff681b;
        }

        @keyframes floatingPulse {
          0% {
            box-shadow: 0 5px 18px rgba(0,0,0,0.2);
          }
          50% {
            box-shadow: 0 5px 22px rgba(0,0,0,0.3),
                        0 0 0 7px rgba(32,199,103,0.12);
          }
          100% {
            box-shadow: 0 5px 18px rgba(0,0,0,0.2);
          }
        }

        @media (max-width: 600px) {
          .floating-contact-buttons {
            right: 14px;
            bottom: 18px;
            gap: 11px;
          }

          .floating-contact-btn {
            width: 49px;
            height: 49px;
            font-size: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-contact-btn {
            animation: none;
          }
        }
      `}</style>

      <ScrollTop />

      <Navbar />

      <main>
        <Page />
      </main>

      <Footer />

      {/* FLOATING CALL & WHATSAPP BUTTONS */}

      <div className="floating-contact-buttons">

        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            "Hello Sri Venkateshwara Safety Nets, I would like to enquire about your services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-btn floating-whatsapp"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href={`tel:+${PHONE}`}
          className="floating-contact-btn floating-call"
          aria-label="Call Sri Venkateshwara Safety Nets"
          title="Call Now"
        >
          <FaPhoneAlt />
        </a>

      </div>
    </>
  );
}

export default App;
