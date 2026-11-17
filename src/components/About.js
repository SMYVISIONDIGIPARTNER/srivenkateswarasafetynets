
import React, { useEffect } from "react";
import {
  FaShieldAlt,

  FaUsers,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaBullseye,
  FaEye,
  FaTools,
  FaGem,
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,

  FaHandsHelping,
} from "react-icons/fa";

const PHONE = "6281524402";
const WHATSAPP = "916281524402";

const whatsappLink = () =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hello Sri Venkateshwara Safety Nets, I would like to know more about your safety net and invisible grill services."
  )}`;

const aboutImage =
  "/images/about.webp";

const serviceAreas = [
  "Marathahalli",
  "Whitefield",
  "Brookefield",
  "Bellandur",
  "Sarjapur Road",
  "HSR Layout",
  "Electronic City",
  "Indiranagar",
  "Koramangala",
  "BTM Layout",
  "KR Puram",
  "Mahadevapura",
  "Panathur",
  "Kundalahalli",
  "Doddanekundi",
  "Jayanagar",
];

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".sva-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("sva-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sva-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Safety First",
      description:
        "Providing practical protection solutions for families, children and pets.",
    },
    {
      icon: <FaTools />,
      title: "Professional Installation",
      description:
        "Careful installation and customized fitting for different spaces.",
    },
    {
      icon: <FaGem />,
      title: "Quality Materials",
      description:
        "Reliable materials selected to meet your safety and protection needs.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Satisfaction",
      description:
        "Focused on understanding customer requirements and delivering suitable solutions.",
    },
    {
      icon: <FaHome />,
      title: "Residential Solutions",
      description:
        "Safety net and invisible grill solutions for homes, balconies and apartments.",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Solutions",
      description:
        "Protection solutions for warehouses, institutions and commercial properties.",
    },
  ];

  const values = [
    "Customized safety solutions",
    "Professional installation",
    "Quality-focused approach",
    "Residential and commercial services",
  ];

  return (
    <main className="sva-about">

      <style>{`

        .sva-about {
          --navy: #06345b;
          --dark: #022746;
          --orange: #ff681b;
          --gold: #ffb52e;
          --light: #f5f9ff;
          width: 100%;
          overflow: hidden;
          background: white;
          color: var(--navy);
          font-family: "Poppins", "Segoe UI", Arial, sans-serif;
        }

        .sva-about * {
          box-sizing: border-box;
        }

        .sva-container {
          width: 92%;
          max-width: 1400px;
          margin: auto;
        }

        .sva-about a {
          text-decoration: none;
        }

        /* ANIMATIONS */

        .sva-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .sva-reveal.sva-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* PAGE HERO */

        .sva-hero {
          min-height: 340px;
          position: relative;
          display: flex;
          align-items: center;
          background:
            linear-gradient(100deg, rgba(2,39,70,.97), rgba(3,55,91,.85)),
            url("/images/about-banner.jpg") center/cover no-repeat;
          overflow: hidden;
        }

        .sva-hero::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          right: -100px;
          top: -180px;
          border: 45px solid rgba(255,104,27,.25);
          border-radius: 50%;
        }

        .sva-hero::after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          right: 15%;
          bottom: -190px;
          background: var(--orange);
          border-radius: 50%;
          opacity: .8;
          filter: blur(2px);
        }

        .sva-hero-content {
          position: relative;
          z-index: 2;
          width: 92%;
          max-width: 1400px;
          margin: auto;
          padding: 75px 0;
          color: white;
        }

        .sva-hero-content small {
          display: inline-block;
          color: var(--gold);
          font-weight: 800;
          letter-spacing: 3px;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .sva-hero-content h1 {
          font-size: clamp(38px, 5vw, 65px);
          line-height: 1.15;
          font-weight: 850;
          letter-spacing: -1.5px;
          margin: 0 0 17px;
        }

        .sva-hero-content h1 span {
          color: var(--gold);
        }

        .sva-hero-content p {
          color: #e1edf8;
          max-width: 650px;
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .sva-breadcrumb {
          margin-top: 25px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d5e4f1;
          font-size: 13px;
        }

        .sva-breadcrumb span {
          color: var(--orange);
          font-weight: 800;
        }

        /* SECTION COMMON */

        .sva-section {
          padding: 80px 0;
        }

        .sva-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .sva-heading small {
          display: block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: var(--orange);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .sva-heading h2 {
          font-size: clamp(28px, 3vw, 40px);
          color: var(--navy);
          margin: 0;
          font-weight: 850;
        }

        .sva-heading p {
          max-width: 650px;
          margin: 14px auto 0;
          font-size: 14px;
          color: #718398;
          line-height: 1.8;
        }

        .sva-line {
          width: 85px;
          height: 4px;
          background: linear-gradient(90deg, var(--orange), var(--gold));
          border-radius: 10px;
          margin: 15px auto 0;
        }

        /* COMPANY INTRO */

        .sva-intro {
          background: white;
        }

        .sva-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .sva-image-wrap {
  position: relative;
  width: 100%;
  max-width: 650px;
  min-width: 0;
  margin: 0 auto;
  overflow: visible;
}

.sva-main-image {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
  background: #f5f9ff;
  box-shadow: 0 15px 40px rgba(3,44,78,.14);
}

        .sva-image-decoration {
          position: absolute;
          width: 75%;
          height: 75%;
          left: -15px;
          bottom: -15px;
          border: 4px solid var(--orange);
          border-radius: 20px;
          z-index: -1;
        }

        .sva-image-label {
  position: relative;
  display: inline-block;
  right: auto;
  bottom: auto;
  margin-top: 15px;
  padding: 15px 22px;
  border-radius: 12px;
  color: white;
  background: var(--navy);
  box-shadow: 0 10px 25px rgba(3,44,78,.2);
}

        .sva-image-label strong {
          display: block;
          font-size: 18px;
        }

        .sva-image-label span {
          font-size: 11px;
          color: #d5e4f1;
        }

        .sva-intro-content small {
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 800;
          color: var(--orange);
          text-transform: uppercase;
        }

        .sva-intro-content h2 {
          font-size: clamp(30px, 3vw, 43px);
          line-height: 1.2;
          font-weight: 850;
          margin: 14px 0 20px;
          color: var(--navy);
        }

        .sva-intro-content h2 span {
          color: var(--orange);
        }

        .sva-intro-content > p {
          color: #687d91;
          font-size: 14px;
          line-height: 1.95;
          margin-bottom: 17px;
        }

        .sva-value-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 12px;
          margin: 25px 0 30px;
        }

        .sva-value-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--navy);
          font-size: 13px;
          font-weight: 700;
        }

        .sva-value-item svg {
          color: var(--orange);
          flex-shrink: 0;
        }

        /* BUTTONS */

        .sva-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 40px;
          padding: 14px 25px;
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
        }

        .sva-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(3,44,78,.15);
        }

        .sva-btn-orange {
          background: linear-gradient(120deg, #ff8a00, #ffb52e);
          color: #062d50;
        }

        .sva-btn-navy {
          background: var(--navy);
          color: white;
        }

        /* MISSION VISION */

        .sva-mission-section {
          background: var(--light);
        }

        .sva-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .sva-mission-card {
          position: relative;
          overflow: hidden;
          background: white;
          padding: 38px;
          border-radius: 18px;
          border: 1px solid #e3eaf2;
          box-shadow: 0 10px 30px rgba(3,44,78,.06);
          transition: .4s ease;
        }

        .sva-mission-card:hover {
          transform: translateY(-8px);
          border-color: var(--orange);
          box-shadow: 0 15px 35px rgba(3,44,78,.12);
        }

        .sva-mission-icon {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          background: linear-gradient(135deg, var(--orange), var(--gold));
          color: white;
          font-size: 27px;
          margin-bottom: 22px;
        }

        .sva-mission-card h3 {
          color: var(--navy);
          font-size: 23px;
          font-weight: 850;
          margin: 0 0 13px;
        }

        .sva-mission-card p {
          color: #718398;
          font-size: 14px;
          line-height: 1.9;
          margin: 0;
        }

        /* WHY CHOOSE US */

        .sva-why {
          background: white;
        }

        .sva-why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 23px;
        }

        .sva-why-card {
          padding: 30px 24px;
          border: 1px solid #e5ecf3;
          border-radius: 17px;
          background: white;
          transition: .4s ease;
          box-shadow: 0 7px 22px rgba(3,44,78,.05);
        }

        .sva-why-card:hover {
          transform: translateY(-9px);
          border-color: var(--orange);
          box-shadow: 0 15px 35px rgba(3,44,78,.12);
        }

        .sva-why-icon {
          width: 57px;
          height: 57px;
          display: grid;
          place-items: center;
          background: #fff0e8;
          color: var(--orange);
          border-radius: 15px;
          font-size: 24px;
          margin-bottom: 20px;
          transition: .3s ease;
        }

        .sva-why-card:hover .sva-why-icon {
          color: white;
          background: var(--orange);
          transform: rotate(-5deg);
        }

        .sva-why-card h3 {
          font-size: 17px;
          font-weight: 850;
          margin: 0 0 11px;
          color: var(--navy);
        }

        .sva-why-card p {
          color: #718398;
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        /* OUR APPROACH */

        .sva-approach {
          background: linear-gradient(120deg, #03294b, #06416c);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .sva-approach .sva-heading h2 {
          color: white;
        }

        .sva-approach .sva-heading p {
          color: #d0dfec;
        }

        .sva-approach-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .sva-approach-card {
          text-align: center;
          padding: 28px 17px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 15px;
          transition: .35s ease;
        }

        .sva-approach-card:hover {
          background: rgba(255,255,255,.13);
          border-color: var(--orange);
          transform: translateY(-7px);
        }

        .sva-approach-card svg {
          color: var(--gold);
          font-size: 29px;
          margin-bottom: 15px;
        }

        .sva-approach-card h3 {
          font-size: 15px;
          color: white;
          margin: 0 0 9px;
        }

        .sva-approach-card p {
          color: #d0dfec;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        /* LOCATIONS */

        .sva-location {
          background: var(--light);
        }

        .sva-location-box {
          background: white;
          padding: 32px;
          border-radius: 18px;
          border: 1px solid #e5ecf3;
          box-shadow: 0 10px 30px rgba(3,44,78,.06);
        }

        .sva-location-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 23px;
        }

        .sva-location-heading svg {
          font-size: 29px;
          color: var(--orange);
        }

        .sva-location-heading h3 {
          font-size: 21px;
          margin: 0;
          color: var(--navy);
        }

        .sva-location-list {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
        }

        .sva-location-list span {
          padding: 10px 16px;
          background: #f1f5fa;
          color: var(--navy);
          border: 1px solid #e0e8f0;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          transition: .3s;
        }

        .sva-location-list span:hover {
          background: var(--orange);
          color: white;
          border-color: var(--orange);
          transform: translateY(-3px);
        }

        /* CONTACT CTA */

        .sva-cta {
          padding: 75px 5%;
          text-align: center;
          background: linear-gradient(120deg, #ff671b, #ff9b21);
        }

        .sva-cta h2 {
          font-size: clamp(27px, 3.5vw, 42px);
          font-weight: 850;
          color: white;
          margin: 0 0 14px;
        }

        .sva-cta p {
          color: white;
          font-size: 14px;
          line-height: 1.8;
          max-width: 680px;
          margin: 0 auto 26px;
        }

        .sva-cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .sva-cta .sva-btn {
          min-width: 170px;
          background: white;
          color: var(--navy);
        }

        .sva-cta .sva-btn-whatsapp {
          background: #128c50;
          color: white;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .sva-intro-grid {
            gap: 35px;
          }

          .sva-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sva-approach-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sva-main-image {
            height: 400px;
          }
        }

        @media (max-width: 700px) {

          .sva-container {
            width: 92%;
          }

          .sva-hero {
            min-height: 280px;
          }

          .sva-hero-content {
            padding: 55px 0;
          }

          .sva-hero-content h1 {
            font-size: 37px;
            letter-spacing: -.7px;
          }

          .sva-hero-content p {
            font-size: 13px;
          }

          .sva-section {
            padding: 55px 0;
          }

          .sva-heading {
            margin-bottom: 30px;
          }

          .sva-heading h2 {
            font-size: 27px;
          }

          .sva-heading p {
            font-size: 12px;
          }

          .sva-intro-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .sva-main-image {
            height: 285px;
          }

          .sva-image-decoration {
            width: 75%;
            height: 70%;
          }

          .sva-image-label {
            right: 10px;
            bottom: 12px;
            padding: 13px 17px;
          }

          .sva-image-label strong {
            font-size: 15px;
          }

          .sva-intro-content h2 {
            font-size: 30px;
          }

          .sva-intro-content > p {
            font-size: 13px;
          }

          .sva-value-list {
            gap: 15px 8px;
          }

          .sva-value-item {
            font-size: 11px;
          }

          .sva-mission-grid {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .sva-mission-card {
            padding: 27px 22px;
          }

          .sva-mission-card h3 {
            font-size: 21px;
          }

          .sva-mission-card p {
            font-size: 13px;
          }

          .sva-why-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .sva-why-card {
            padding: 23px;
          }

          .sva-why-card h3 {
            font-size: 16px;
          }

          .sva-why-card p {
            font-size: 12px;
          }

          .sva-approach-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 11px;
          }

          .sva-approach-card {
            padding: 22px 10px;
          }

          .sva-approach-card h3 {
            font-size: 13px;
          }

          .sva-approach-card p {
            font-size: 11px;
          }

          .sva-location-box {
            padding: 21px 15px;
          }

          .sva-location-heading h3 {
            font-size: 17px;
          }

          .sva-location-list {
            gap: 8px;
          }

          .sva-location-list span {
            padding: 8px 11px;
            font-size: 11px;
          }

          .sva-cta {
            padding: 55px 5%;
          }

          .sva-cta h2 {
            font-size: 27px;
          }

          .sva-cta p {
            font-size: 12px;
          }

          .sva-cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .sva-cta .sva-btn {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sva-about *,
          .sva-about *::before,
          .sva-about *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }

          .sva-reveal {
            opacity: 1;
            transform: none;
          }
        }

      `}</style>

      {/* ABOUT HERO */}

      <section className="sva-hero">

        <div className="sva-hero-content sva-reveal">

          <small>Welcome To Sri Venkateshwara Safety Nets</small>

          <h1>
            About <span>Sri Venkateshwara Safety Nets</span>
          </h1>

          <p>
            Dedicated to providing reliable safety nets, invisible
            grills and protection solutions for modern homes,
            apartments and commercial spaces.
          </p>

          <div className="sva-breadcrumb">
            <a href="/" style={{ color: "white" }}>Home</a>
            <FaArrowRight />
            <span>About Us</span>
          </div>

        </div>

      </section>

      {/* COMPANY INTRODUCTION */}

      <section className="sva-section sva-intro">

        <div className="sva-container sva-intro-grid">

          <div className="sva-image-wrap sva-reveal">

            <img
              src={aboutImage}
              alt="Sri Venkateshwara Safety Nets"
              className="sva-main-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85";
              }}
            />

            <div className="sva-image-decoration" />

            <div className="sva-image-label">
              <strong>Safety First</strong>
              <span>Protecting Your Spaces</span>
            </div>

          </div>

          <div className="sva-intro-content sva-reveal">

            <small>Who We Are</small>

            <h2>
              Protecting Homes,
              <span> Securing Lives</span>
            </h2>

            <p>
              Sri Venkateshwara Safety Nets provides safety and
              protection solutions for residential and commercial
              properties. We understand the importance of creating
              secure environments for families, children and pets.
            </p>

            <p>
              Our services include balcony safety nets, invisible
              grills, anti-bird netting, pigeon protection, terrace
              safety nets, duct netting and sports nets. We focus on
              providing customized solutions according to individual
              property requirements.
            </p>

            <div className="sva-value-list">

              {values.map((value) => (
                <div className="sva-value-item" key={value}>
                  <FaCheckCircle />
                  {value}
                </div>
              ))}

            </div>

            <a
              href={`tel:+91${PHONE}`}
              className="sva-btn sva-btn-orange"
            >
              <FaPhoneAlt /> Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* MISSION AND VISION */}

      <section className="sva-section sva-mission-section">

        <div className="sva-container">

          <div className="sva-heading sva-reveal">
            <small>Our Purpose</small>
            <h2>Our Mission & Vision</h2>
            <div className="sva-line" />
            <p>
              Our focus is on making homes and commercial spaces
              safer through practical and reliable protection
              solutions.
            </p>
          </div>

          <div className="sva-mission-grid">

            <div className="sva-mission-card sva-reveal">

              <div className="sva-mission-icon">
                <FaBullseye />
              </div>

              <h3>Our Mission</h3>

              <p>
                To provide suitable safety net and invisible grill
                solutions that help protect families, pets and
                properties. We aim to deliver quality-focused
                installation and dependable customer service.
              </p>

            </div>

            <div className="sva-mission-card sva-reveal">

              <div className="sva-mission-icon">
                <FaEye />
              </div>

              <h3>Our Vision</h3>

              <p>
                To become a trusted name in safety and protection
                solutions by focusing on quality, professional
                workmanship, customer satisfaction and continuous
                improvement.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="sva-section sva-why">

        <div className="sva-container">

          <div className="sva-heading sva-reveal">
            <small>Why Choose Us</small>
            <h2>Why Choose Sri Venkateshwara?</h2>
            <div className="sva-line" />
            <p>
              We focus on delivering suitable safety solutions
              with attention to quality and installation.
            </p>
          </div>

          <div className="sva-why-grid">

            {benefits.map((benefit, index) => (
              <div
                className="sva-why-card sva-reveal"
                key={benefit.title}
                style={{
                  transitionDelay: `${(index % 3) * 100}ms`,
                }}
              >

                <div className="sva-why-icon">
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* OUR APPROACH */}

      <section className="sva-section sva-approach">

        <div className="sva-container">

          <div className="sva-heading sva-reveal">
            <small>Our Commitment</small>
            <h2>What Makes Our Approach Different?</h2>
            <div className="sva-line" />
            <p>
              Every property has different requirements. We focus
              on understanding your space and providing appropriate
              protection solutions.
            </p>
          </div>

          <div className="sva-approach-grid">

            {[
              {
                icon: <FaShieldAlt />,
                title: "Safety Focused",
                description:
                  "Solutions designed around your property's safety requirements.",
              },
              {
                icon: <FaTools />,
                title: "Custom Fitting",
                description:
                  "Installation planned according to the available space.",
              },
              {
                icon: <FaGem />,
                title: "Quality Oriented",
                description:
                  "Attention to material selection and installation quality.",
              },
              {
                icon: <FaHandsHelping />,
                title: "Customer Support",
                description:
                  "Assistance in choosing suitable safety solutions.",
              },
            ].map((item) => (
              <div
                className="sva-approach-card sva-reveal"
                key={item.title}
              >

                {item.icon}

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICE LOCATIONS */}

      <section className="sva-section sva-location">

        <div className="sva-container">

          <div className="sva-heading sva-reveal">
            <small>Where We Serve</small>
            <h2>Serving Across Bangalore</h2>
            <div className="sva-line" />
            <p>
              Providing safety net and invisible grill solutions
              across Bangalore for homes, apartments and commercial
              properties.
            </p>
          </div>

          <div className="sva-location-box sva-reveal">

            <div className="sva-location-heading">
              <FaMapMarkerAlt />
              <h3>Popular Service Areas</h3>
            </div>

            <div className="sva-location-list">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}

      <section className="sva-cta">

        <div className="sva-container sva-reveal">

          <h2>
            Your Safety Is Our Priority!
          </h2>

          <p>
            Looking for balcony safety nets, invisible grills,
            pigeon protection or other safety solutions?
            Get in touch with Sri Venkateshwara Safety Nets today.
          </p>

          <div className="sva-cta-buttons">

            <a
              href={`tel:+91${PHONE}`}
              className="sva-btn"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="sva-btn sva-btn-whatsapp"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;
