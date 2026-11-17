
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,

  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,

  FaPaperPlane,
} from "react-icons/fa";

const WHATSAPP = "916281524402";

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".svs-contact-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) =>
        el.classList.add("svs-contact-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("svs-contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello Sri Venkateshwara Safety Nets,

I would like to enquire about your services.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service || "General Enquiry"}
Message: ${formData.message || "Please share more details."}

Please contact me with the details. Thank you.
    `;

    window.open(
      whatsappLink(message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="svs-contact">

      <style>{`

        .svs-contact {
          --navy: #06345b;
          --dark: #022746;
          --orange: #ff681b;
          --gold: #ffb52e;
          --light: #f5f9ff;
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: var(--navy);
          font-family: "Poppins", "Segoe UI", Arial, sans-serif;
        }

        .svs-contact * {
          box-sizing: border-box;
        }

        .svs-contact a {
          text-decoration: none;
        }

        .svs-contact-container {
          width: 92%;
          max-width: 1400px;
          margin: auto;
        }

        /* ANIMATIONS */

        .svs-contact-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity .75s ease,
            transform .75s cubic-bezier(.2,.8,.2,1);
        }

        .svs-contact-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */

        .svs-contact-hero {
          min-height: 340px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              100deg,
              rgba(2,39,70,.97),
              rgba(3,55,91,.85)
            ),
            url("/images/contact-banner.jpg") center/cover no-repeat;
        }

        .svs-contact-hero::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          border: 45px solid rgba(255,104,27,.22);
          border-radius: 50%;
          right: -90px;
          top: -180px;
        }

        .svs-contact-hero::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          background: var(--orange);
          border-radius: 50%;
          opacity: .8;
          filter: blur(2px);
          right: 20%;
          bottom: -180px;
        }

        .svs-contact-hero-content {
          position: relative;
          z-index: 2;
          width: 92%;
          max-width: 1400px;
          margin: auto;
          padding: 75px 0;
          color: white;
        }

        .svs-contact-hero-content small {
          color: var(--gold);
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 800;
          text-transform: uppercase;
          display: block;
          margin-bottom: 15px;
        }

        .svs-contact-hero-content h1 {
          font-size: clamp(38px,5vw,65px);
          font-weight: 850;
          letter-spacing: -1px;
          line-height: 1.15;
          margin: 0 0 17px;
        }

        .svs-contact-hero-content h1 span {
          color: var(--gold);
        }

        .svs-contact-hero-content p {
          color: #e1edf8;
          font-size: 15px;
          line-height: 1.9;
          max-width: 650px;
          margin: 0;
        }

        .svs-contact-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          font-size: 13px;
          color: #d5e4f1;
        }

        .svs-contact-breadcrumb a {
          color: white;
        }

        .svs-contact-breadcrumb svg,
        .svs-contact-breadcrumb span {
          color: var(--orange);
        }

        /* INTRO */

        .svs-contact-intro {
          padding: 65px 0 25px;
          text-align: center;
        }

        .svs-contact-label {
          display: block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 10px;
        }

        .svs-contact-intro h2 {
          font-size: clamp(28px,3vw,40px);
          color: var(--navy);
          font-weight: 850;
          margin: 0;
        }

        .svs-contact-line {
          height: 4px;
          width: 85px;
          background: linear-gradient(90deg,var(--orange),var(--gold));
          margin: 15px auto;
          border-radius: 10px;
        }

        .svs-contact-intro p {
          max-width: 750px;
          margin: 0 auto;
          font-size: 14px;
          line-height: 1.9;
          color: #718398;
        }

        /* CONTACT INFORMATION */

        .svs-contact-info-section {
          padding: 40px 0 80px;
          background: var(--light);
        }

        .svs-contact-grid {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 25px;
        }

        .svs-contact-info-card {
          background: white;
          padding: 35px 25px;
          text-align: center;
          border-radius: 16px;
          border: 1px solid #e6edf4;
          box-shadow: 0 8px 25px rgba(3,44,78,.06);
          transition: .4s ease;
        }

        .svs-contact-info-card:hover {
          transform: translateY(-8px);
          border-color: var(--orange);
          box-shadow: 0 18px 35px rgba(3,44,78,.12);
        }

        .svs-contact-icon {
          width: 65px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #fff1e8;
          color: var(--orange);
          font-size: 25px;
          transition: .4s ease;
        }

        .svs-contact-info-card:hover .svs-contact-icon {
          background: var(--orange);
          color: white;
          transform: rotateY(180deg);
        }

        .svs-contact-info-card h3 {
          font-size: 19px;
          font-weight: 850;
          color: var(--navy);
          margin: 0 0 12px;
        }

        .svs-contact-info-card p {
          font-size: 13px;
          line-height: 1.8;
          color: #718398;
          margin: 0 0 17px;
          overflow-wrap: anywhere;
        }

        .svs-contact-info-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #e9f8ef;
          color: #138849;
          padding: 11px 20px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 800;
          transition: .3s ease;
        }

        .svs-contact-info-link:hover {
          background: #128c50;
          color: white;
          transform: translateY(-3px);
        }

        /* FORM SECTION */

        .svs-contact-form-section {
          padding: 85px 0;
          background: white;
        }

        .svs-contact-form-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 55px;
          align-items: center;
        }

        .svs-contact-form-content h2 {
          color: var(--navy);
          font-size: clamp(29px,3vw,42px);
          font-weight: 850;
          line-height: 1.25;
          margin: 12px 0 18px;
        }

        .svs-contact-form-content h2 span {
          color: var(--orange);
        }

        .svs-contact-form-content > p {
          color: #718398;
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 28px;
        }

        .svs-contact-benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 17px;
          color: #536b81;
          font-size: 13px;
          font-weight: 700;
        }

        .svs-contact-benefit svg {
          color: var(--orange);
          font-size: 17px;
          flex-shrink: 0;
        }

        .svs-contact-form-box {
          background: var(--light);
          padding: 38px;
          border-radius: 18px;
          border: 1px solid #e5edf5;
          box-shadow: 0 12px 35px rgba(3,44,78,.08);
        }

        .svs-contact-form-box h3 {
          color: var(--navy);
          font-size: 24px;
          font-weight: 850;
          margin: 0 0 8px;
        }

        .svs-contact-form-box > p {
          color: #718398;
          font-size: 13px;
          line-height: 1.7;
          margin: 0 0 25px;
        }

        .svs-contact-form {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .svs-contact-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .svs-contact-form-group label {
          font-size: 12px;
          font-weight: 800;
          color: var(--navy);
        }

        .svs-contact-form-group input,
        .svs-contact-form-group select,
        .svs-contact-form-group textarea {
          width: 100%;
          padding: 14px 15px;
          border: 1px solid #dce5ee;
          background: white;
          border-radius: 8px;
          outline: none;
          font-family: inherit;
          font-size: 13px;
          color: var(--navy);
          transition: .3s ease;
        }

        .svs-contact-form-group input:focus,
        .svs-contact-form-group select:focus,
        .svs-contact-form-group textarea:focus {
          border-color: var(--orange);
          box-shadow: 0 0 0 3px rgba(255,104,27,.1);
        }

        .svs-contact-form-group textarea {
          min-height: 115px;
          resize: vertical;
        }

        .svs-contact-submit {
          width: 100%;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 15px 20px;
          border-radius: 8px;
          background: #128c50;
          color: white;
          font-size: 14px;
          font-family: inherit;
          font-weight: 850;
          cursor: pointer;
          transition: .3s ease;
        }

        .svs-contact-submit:hover {
          background: #06345b;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(3,44,78,.15);
        }

        /* MAP */

        .svs-contact-map-section {
          padding: 75px 0 85px;
          background: var(--light);
        }

        .svs-contact-map-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .svs-contact-map-heading h2 {
          font-size: clamp(28px,3vw,40px);
          color: var(--navy);
          font-weight: 850;
          margin: 0;
        }

        .svs-contact-map-heading p {
          color: #718398;
          font-size: 14px;
          margin: 12px 0 0;
        }

        .svs-contact-map {
          width: 100%;
          height: 430px;
          border: 0;
          border-radius: 16px;
          display: block;
          box-shadow: 0 12px 35px rgba(3,44,78,.1);
        }

        /* CTA */

        .svs-contact-cta {
          padding: 75px 5%;
          text-align: center;
          background: linear-gradient(120deg,#ff671b,#ff9b21);
        }

        .svs-contact-cta h2 {
          font-size: clamp(27px,3.5vw,42px);
          color: white;
          font-weight: 850;
          margin: 0 0 14px;
        }

        .svs-contact-cta p {
          color: white;
          max-width: 680px;
          margin: 0 auto 26px;
          font-size: 14px;
          line-height: 1.8;
        }

        .svs-contact-cta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 210px;
          padding: 15px 25px;
          border-radius: 40px;
          background: #128c50;
          color: white;
          font-size: 14px;
          font-weight: 850;
          transition: .3s ease;
        }

        .svs-contact-cta a:hover {
          background: var(--navy);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,.15);
        }

        /* TABLET */

        @media(max-width:1050px) {
          .svs-contact-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }

          .svs-contact-form-grid {
            gap: 30px;
          }
        }

        /* MOBILE */

        @media(max-width:700px) {

          .svs-contact-container {
            width: 92%;
          }

          .svs-contact-hero {
            min-height: 280px;
          }

          .svs-contact-hero-content {
            padding: 55px 0;
          }

          .svs-contact-hero-content h1 {
            font-size: 37px;
          }

          .svs-contact-hero-content p {
            font-size: 13px;
          }

          .svs-contact-intro {
            padding: 48px 0 20px;
          }

          .svs-contact-intro h2 {
            font-size: 27px;
          }

          .svs-contact-intro p {
            font-size: 12px;
          }

          .svs-contact-info-section {
            padding: 30px 0 55px;
          }

          .svs-contact-grid {
            grid-template-columns: minmax(0,1fr);
            gap: 17px;
          }

          .svs-contact-info-card {
            padding: 28px 20px;
          }

          .svs-contact-form-section {
            padding: 55px 0;
          }

          .svs-contact-form-grid {
            grid-template-columns: minmax(0,1fr);
            gap: 30px;
          }

          .svs-contact-form-content h2 {
            font-size: 29px;
          }

          .svs-contact-form-content > p {
            font-size: 13px;
          }

          .svs-contact-form-box {
            padding: 23px 18px;
          }

          .svs-contact-form-box h3 {
            font-size: 21px;
          }

          .svs-contact-map-section {
            padding: 55px 0;
          }

          .svs-contact-map-heading h2 {
            font-size: 27px;
          }

          .svs-contact-map-heading p {
            font-size: 12px;
          }

          .svs-contact-map {
            height: 320px;
            border-radius: 12px;
          }

          .svs-contact-cta {
            padding: 55px 5%;
          }

          .svs-contact-cta h2 {
            font-size: 27px;
          }

          .svs-contact-cta p {
            font-size: 12px;
          }

          .svs-contact-cta a {
            width: 100%;
            max-width: 280px;
          }
        }

        @media(max-width:380px) {
          .svs-contact-form-box {
            padding: 20px 14px;
          }

          .svs-contact-map {
            height: 280px;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .svs-contact *,
          .svs-contact *::before,
          .svs-contact *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }

          .svs-contact-reveal {
            opacity: 1;
            transform: none;
          }
        }

      `}</style>

      {/* HERO */}

      <section className="svs-contact-hero">

        <div className="svs-contact-hero-content svs-contact-reveal">

          <small>Sri Venkateshwara Safety Nets</small>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Have questions about safety nets, invisible grills
            or bird protection? Get in touch with us through
            WhatsApp. We are happy to help you.
          </p>

          <div className="svs-contact-breadcrumb">
            <a href="/">Home</a>
            <FaArrowRight />
            <span>Contact Us</span>
          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="svs-contact-intro">

        <div className="svs-contact-container svs-contact-reveal">

          <span className="svs-contact-label">
            Get In Touch
          </span>

          <h2>
            We're Here To Help You
          </h2>

          <div className="svs-contact-line" />

          <p>
            Looking for reliable safety solutions for your home
            or business? Contact Sri Venkateshwara Safety Nets
            and let us help you find the right solution.
          </p>

        </div>

      </section>

      {/* CONTACT CARDS */}

      <section className="svs-contact-info-section">

        <div className="svs-contact-container">

          <div className="svs-contact-grid">

            <article className="svs-contact-info-card svs-contact-reveal">

              <div className="svs-contact-icon">
                <FaWhatsapp />
              </div>

              <h3>WhatsApp Us</h3>

              <p>
                Send us your requirements and get quick
                assistance from our team.
              </p>

              <a
                href={whatsappLink("Hello, I would like to enquire about your safety net services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="svs-contact-info-link"
              >
                <FaWhatsapp />
                Chat With Us
              </a>

            </article>

            <article className="svs-contact-info-card svs-contact-reveal">

              <div className="svs-contact-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Our Location</h3>

              <p>
                Serving customers across Bangalore,
                Karnataka with professional safety solutions.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bangalore%2C+Karnataka%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                className="svs-contact-info-link"
              >
                <FaMapMarkerAlt />
                View Location
              </a>

            </article>

            <article className="svs-contact-info-card svs-contact-reveal">

              <div className="svs-contact-icon">
                <FaShieldAlt />
              </div>

              <h3>Our Services</h3>

              <p>
                Balcony nets, invisible grills, pigeon nets,
                bird protection and customized safety solutions.
              </p>

              <a
                href={whatsappLink("Hello, I would like to know more about your safety net services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="svs-contact-info-link"
              >
                <FaWhatsapp />
                Enquire Now
              </a>

            </article>

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section className="svs-contact-form-section">

        <div className="svs-contact-container">

          <div className="svs-contact-form-grid">

            <div className="svs-contact-form-content svs-contact-reveal">

              <span className="svs-contact-label">
                Let's Connect
              </span>

              <h2>
                Get The Right <span>Safety Solution</span>
              </h2>

              <p>
                Tell us about your requirements. Fill out the
                enquiry form and submit it through WhatsApp.
                Our team can assist you with your safety needs.
              </p>

              <div className="svs-contact-benefit">
                <FaCheckCircle />
                Professional Safety Solutions
              </div>

              <div className="svs-contact-benefit">
                <FaCheckCircle />
                Residential & Commercial Services
              </div>

              <div className="svs-contact-benefit">
                <FaCheckCircle />
                Customized Installation Solutions
              </div>

              <div className="svs-contact-benefit">
                <FaCheckCircle />
                Quick WhatsApp Enquiries
              </div>

            </div>

            <div className="svs-contact-form-box svs-contact-reveal">

              <h3>Send An Enquiry</h3>

              <p>
                Fill in your details. You will be redirected
                to WhatsApp to send your enquiry.
              </p>

              <form
                className="svs-contact-form"
                onSubmit={handleSubmit}
              >

                <div className="svs-contact-form-group">

                  <label htmlFor="contact-name">
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="svs-contact-form-group">

                  <label htmlFor="contact-phone">
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9+() -]{7,20}"
                    required
                  />

                </div>

                <div className="svs-contact-form-group">

                  <label htmlFor="contact-service">
                    Select Your Service
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select a service
                    </option>

                    <option value="Balcony Safety Nets">
                      Balcony Safety Nets
                    </option>

                    <option value="Invisible Grill for Balcony">
                      Invisible Grill for Balcony
                    </option>

                    <option value="Anti Bird Netting">
                      Anti Bird Netting
                    </option>

                    <option value="Children Safety Nets">
                      Children Safety Nets
                    </option>

                    <option value="Terrace Safety Nets">
                      Terrace Safety Nets
                    </option>

                    <option value="Ceiling Cloth Hanger">
                      Ceiling Cloth Hanger
                    </option>

                    <option value="Pet & Cat Safety Nets">
                      Pet & Cat Safety Nets
                    </option>

                    <option value="Pigeon Safety Nets">
                      Pigeon Safety Nets
                    </option>

                    <option value="Monkey Safety Nets">
                      Monkey Safety Nets
                    </option>

                    <option value="Sports Nets">
                      Sports Nets
                    </option>

                    <option value="Other Services">
                      Other Services
                    </option>

                  </select>

                </div>

                <div className="svs-contact-form-group">

                  <label htmlFor="contact-message">
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                </div>

                <button
                  type="submit"
                  className="svs-contact-submit"
                >
                  <FaWhatsapp />
                  Submit Through WhatsApp
                  <FaPaperPlane />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* BANGALORE MAP */}

      <section className="svs-contact-map-section">

        <div className="svs-contact-container svs-contact-reveal">

          <div className="svs-contact-map-heading">

            <span className="svs-contact-label">
              Find Us
            </span>

            <h2>
              Our Service Location
            </h2>

            <div className="svs-contact-line" />

            <p>
              Providing safety net and protection solutions
              across Bangalore, Karnataka.
            </p>

          </div>

          <iframe
            className="svs-contact-map"
            title="Sri Venkateshwara Safety Nets - Bangalore Map"
            src="https://maps.google.com/maps?q=Bangalore%2C%20Karnataka%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="svs-contact-cta">

        <div className="svs-contact-container svs-contact-reveal">

          <h2>
            Let's Make Your Space Safer!
          </h2>

          <p>
            Get in touch with Sri Venkateshwara Safety Nets
            today. Send us your requirements on WhatsApp
            and let us help you find the perfect safety solution.
          </p>

          <a
            href={whatsappLink("Hello Sri Venkateshwara Safety Nets, I would like to enquire about your services. Please contact me.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Chat With Us Now
            <FaArrowRight />
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;
