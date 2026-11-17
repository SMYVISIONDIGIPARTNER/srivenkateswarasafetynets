
import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaShieldAlt,
  FaGlobe,
  FaTools,
  FaCheckCircle,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";

const PHONE_DISPLAY = "+91 6281524402";
const PHONE_LINK = "916281524402";
const WHATSAPP_LINK = "916281524402";
const EMAIL = "Srivenkateshwarasafetynets@gmail.com";

const services = [
  "Balcony Safety Nets",
  "Invisible Grills",
  "Pigeon Safety Nets",
  "Children Safety Nets",
  "Terrace Safety Nets",
  "Pet & Cat Safety Nets",
  "Window Safety Nets",
  "Anti Bird Nets",
  "Sports & Cricket Nets",
  "Construction Safety Nets",
];

const serviceAreas = [
  "Marathahalli",
  "Whitefield",
  "Brookefield",
  "HSR Layout",
  "Bellandur",
  "Sarjapur Road",
  "Electronic City",
  "BTM Layout",
  "Koramangala",
  "Indiranagar",
  "KR Puram",
  "Mahadevapura",
  "AECS Layout",
  "Kundalahalli",
  "Munnekollal",
  "Panathur",
  "Doddanekundi",
  "Jayanagar",
  "ITPL",
];

function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hello Sri Venkateshwara Safety Nets, I would like to get a quote for safety net and invisible grill installation in Bangalore."
  );

  return (
    <>
      <style>{`

        .sv-footer,
        .sv-footer * {
          box-sizing: border-box;
        }

        /* MAIN FOOTER */

        .sv-footer {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
          background: #052e50;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          position: relative;
          overflow: hidden;
          border-radius: 0;
        }

        .sv-footer-top-line {
          width: 100%;
          height: 6px;
          margin: 0;
          padding: 0;
          background: linear-gradient(
            90deg,
            #ff6718,
            #ffad35,
            #ff6718
          );
        }

        /* MAIN CONTENT */

        .sv-footer-main {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
          padding: 60px 4% 45px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.25fr 1.2fr;
          gap: 35px;
        }

        /* COMPANY */

        .sv-footer-company {
          min-width: 0;
        }

        .sv-footer-logo {
          display: inline-block;
          background: #ffffff;
          border-radius: 8px;
          padding: 7px 10px;
          margin-bottom: 18px;
          max-width: 100%;
        }

        .sv-footer-logo img {
          width: 255px;
          max-width: 100%;
          height: 75px;
          object-fit: contain;
          display: block;
        }

        .sv-footer-company h3 {
          color: #ff9a32;
          font-size: 19px;
          margin: 0 0 15px;
          line-height: 1.5;
        }

        .sv-footer-company p {
          color: #d7e3ef;
          font-size: 14px;
          line-height: 1.9;
          margin: 0 0 14px;
        }

        .sv-footer-highlight {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 16px;
          color: #ffffff;
          font-size: 14px;
          line-height: 1.7;
        }

        .sv-footer-highlight svg {
          color: #ff9a32;
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* HEADINGS */

        .sv-footer-heading {
          color: #ffffff;
          font-size: 19px;
          font-weight: 700;
          margin: 0 0 25px;
          padding-bottom: 13px;
          position: relative;
        }

        .sv-footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 48px;
          height: 3px;
          border-radius: 5px;
          background: #ff7625;
        }

        /* QUICK LINKS */

        .sv-footer-links {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .sv-footer-links a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d7e3ef;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .sv-footer-links a svg {
          color: #ff8a2b;
          font-size: 12px;
        }

        .sv-footer-links a:hover {
          color: #ff9a32;
          transform: translateX(5px);
        }

        /* SERVICES */

        .sv-footer-service-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .sv-footer-service-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d7e3ef;
          text-decoration: none;
          font-size: 14px;
          line-height: 1.5;
          transition: all 0.3s ease;
        }

        .sv-footer-service-list a svg {
          color: #ff8a2b;
          font-size: 13px;
          flex-shrink: 0;
        }

        .sv-footer-service-list a:hover {
          color: #ff9a32;
          transform: translateX(4px);
        }

        /* CONTACT */

        .sv-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-bottom: 21px;
        }

        .sv-footer-contact-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 132, 38, 0.15);
          color: #ff9a32;
          font-size: 15px;
        }

        .sv-footer-contact-text {
          min-width: 0;
        }

        .sv-footer-contact-text h4 {
          color: #ff9a32;
          font-size: 14px;
          margin: 0 0 6px;
        }

        .sv-footer-contact-text a,
        .sv-footer-contact-text p {
          color: #d7e3ef;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .sv-footer-contact-text a:hover {
          color: #ff9a32;
        }

        /* WHATSAPP */

        .sv-footer-whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 20px;
          background: #ff681c;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          border-radius: 30px;
          margin-top: 5px;
          transition: all 0.3s ease;
        }

        .sv-footer-whatsapp:hover {
          background: #ffffff;
          color: #06345b;
          transform: translateY(-3px);
        }

        /* BANGALORE AREAS */

        .sv-footer-areas {
          width: 100%;
          max-width: 1350px;
          margin: 0 auto;
          padding: 25px 4%;
          border-top: 1px solid rgba(255,255,255,0.14);
          border-bottom: 1px solid rgba(255,255,255,0.14);
        }

        .sv-footer-areas-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .sv-footer-areas-heading svg {
          color: #ff922e;
          font-size: 21px;
        }

        .sv-footer-areas-heading h3 {
          color: #ffffff;
          font-size: 18px;
          margin: 0;
        }

        .sv-footer-area-list {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
        }

        .sv-footer-area-list span {
          padding: 9px 15px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 30px;
          color: #d7e3ef;
          font-size: 13px;
          transition: all 0.3s ease;
        }

        .sv-footer-area-list span:hover {
          background: #ff681c;
          border-color: #ff681c;
          color: #ffffff;
        }

        /* COPYRIGHT */

        .sv-footer-bottom {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
          padding: 22px 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
        }

        .sv-footer-copyright {
          color: #c8d7e5;
          font-size: 13px;
          line-height: 1.8;
        }

        .sv-footer-credit {
          color: #c8d7e5;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .sv-footer-credit a {
          color: #ff9a32;
          font-weight: 700;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .sv-footer-credit a:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        .sv-footer-credit svg {
          color: #ff7625;
        }

        /* TABLET */

        @media (max-width: 1100px) {
          .sv-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 40px 30px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {

          .sv-footer-main {
            grid-template-columns: 1fr;
            padding: 40px 6% 30px;
            gap: 32px;
          }

          .sv-footer-logo img {
            width: 235px;
            height: 70px;
          }

          .sv-footer-heading {
            font-size: 18px;
            margin-bottom: 20px;
          }

          .sv-footer-company h3 {
            font-size: 18px;
          }

          .sv-footer-areas {
            padding: 24px 6%;
          }

          .sv-footer-areas-heading h3 {
            font-size: 16px;
          }

          .sv-footer-area-list {
            gap: 9px;
          }

          .sv-footer-area-list span {
            padding: 8px 12px;
            font-size: 12px;
          }

          .sv-footer-bottom {
            padding: 20px 5%;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            gap: 10px;
          }

          .sv-footer-credit {
            justify-content: center;
            line-height: 1.8;
          }
        }

      `}</style>

      <footer className="sv-footer">

        <div className="sv-footer-top-line" />

        {/* MAIN FOOTER */}

        <div className="sv-footer-main">

          {/* COMPANY INFORMATION */}

          <div className="sv-footer-company">

            <a href="/" className="sv-footer-logo">
              <img
                src="/logo.png"
                alt="Sri Venkateshwara Safety Nets and Invisible Grills"
              />
            </a>

            <h3>Sri Venkateshwara Safety Nets</h3>

            <p>
              Sri Venkateshwara Safety Nets provides invisible
              grills, balcony safety nets, pigeon safety nets,
              children safety nets, terrace protection, pet
              safety nets and other safety solutions for homes,
              apartments, institutions and commercial spaces
              across Bangalore.
            </p>

            <div className="sv-footer-highlight">
              <FaShieldAlt />
              <span>
                Professional installation with custom fitting
                for reliable safety solutions.
              </span>
            </div>

            <div className="sv-footer-highlight">
              <FaCheckCircle />
              <span>
                Quality Solutions. Professional Installation.
                Customer Satisfaction.
              </span>
            </div>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h3 className="sv-footer-heading">
              Quick Links
            </h3>

            <div className="sv-footer-links">

              <a href="/">
                <FaArrowRight /> Home
              </a>

              <a href="/about">
                <FaArrowRight /> About Us
              </a>

              <a href="/services">
                <FaArrowRight /> Services
              </a>

              <a href="/contact">
                <FaArrowRight /> Contact Us
              </a>

            </div>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="sv-footer-heading">
              Our Services
            </h3>

            <div className="sv-footer-service-list">

              {services.map((service) => (
                <a href="/services" key={service}>
                  <FaTools />
                  {service}
                </a>
              ))}

            </div>

          </div>

          {/* CONTACT DETAILS */}

          <div>

            <h3 className="sv-footer-heading">
              Contact Us
            </h3>

            <div className="sv-footer-contact-item">

              <div className="sv-footer-contact-icon">
                <FaPhoneAlt />
              </div>

              <div className="sv-footer-contact-text">
                <h4>Call Us</h4>
                <a href={`tel:${PHONE_LINK}`}>
                  {PHONE_DISPLAY}
                </a>
              </div>

            </div>

            <div className="sv-footer-contact-item">

              <div className="sv-footer-contact-icon">
                <FaEnvelope />
              </div>

              <div className="sv-footer-contact-text">
                <h4>Email Us</h4>
                <a href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>

            </div>

            <div className="sv-footer-contact-item">

              <div className="sv-footer-contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="sv-footer-contact-text">
                <h4>Service Area</h4>
                <p>Bangalore, Karnataka, India</p>
              </div>

            </div>

            <div className="sv-footer-contact-item">

              <div className="sv-footer-contact-icon">
                <FaGlobe />
              </div>

              <div className="sv-footer-contact-text">
                <h4>Service Coverage</h4>
                <p>
                  Homes | Apartments | Offices |
                  Commercial Spaces
                </p>
              </div>

            </div>

            <a
              href={`https://wa.me/${WHATSAPP_LINK}?text=${whatsappMessage}`}
              className="sv-footer-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={19} />
              Chat on WhatsApp
            </a>

          </div>

        </div>

        {/* BANGALORE SERVICE AREAS */}

        <div className="sv-footer-areas">

          <div className="sv-footer-areas-heading">
            <FaMapMarkerAlt />
            <h3>Popular Service Areas in Bangalore</h3>
          </div>

          <div className="sv-footer-area-list">

            {serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="sv-footer-bottom">

          <div className="sv-footer-copyright">
            © {new Date().getFullYear()} Sri Venkateshwara
            Safety Nets. All Rights Reserved.
          </div>

          <div className="sv-footer-credit">
            Developed with <FaHeart /> by

            <a
              href="https://www.smyvisiontechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMYVISION TECHNOLOGIES
            </a>
          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;
