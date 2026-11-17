
import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,

} from "react-icons/fa";

const PHONE = "6281524402";
const WHATSAPP = "916281524402";

const whatsappLink = (service) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hello Sri Venkateshwara Safety Nets, I would like to enquire about ${service}. Please share the details.`
  )}`;

const services = [
  {
    title: "Balcony Safety Nets",
    description:
      "High-strength HDPE nets for balconies to prevent falls and ensure child and pet safety without blocking the view.",
    image: "/images/balcony-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    tag: "Home Protection",
  },
  {
    title: "Invisible Grill for Balcony",
    description:
      "Stainless steel invisible grills with 2mm cables, offering an elegant and rust-resistant solution for modern balconies.",
    image: "/images/invisible-grills.webp",
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
    tag: "Modern Safety",
  },
  {
    title: "Anti Bird Netting",
    description:
      "Durable bird-proof netting solutions to keep pigeons and other birds away from balconies, ducts and terraces.",
    image: "/images/anti-bird-netting.webp",
    fallback:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=900&q=85",
    tag: "Bird Protection",
  },
  {
    title: "Children Safety Nets",
    description:
      "Extra-strong safety nets designed to help protect children from accidental falls from balconies and windows.",
    image: "/images/children-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85",
    tag: "Child Safety",
  },
  {
    title: "Terrace Shed Covering Safety Nets",
    description:
      "Durable weather-resistant safety nets designed for terrace sheds, helping prevent bird nesting and unwanted hazards.",
    image: "/images/terrace-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=85",
    tag: "Terrace Protection",
  },
  {
    title: "Ceiling Cloth Hanger",
    description:
      "Space-saving ceiling-mounted cloth drying hanger systems with convenient pulley mechanisms for balconies.",
    image: "/images/ceiling-cloth-hanger.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85",
    tag: "Smart Solutions",
  },
  {
    title: "Pet & Cat Safety Nets",
    description:
      "Secure netting solutions designed to help keep your pets safe on balconies, windows and open areas.",
    image: "/images/pet-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=85",
    tag: "Pet Protection",
  },
  {
    title: "Apartment Balcony & Duct Netting",
    description:
      "Complete balcony bird-proofing and duct shaft protection for apartments, villas and residential communities.",
    image: "/images/apartment-duct-netting.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
    tag: "Apartment Solutions",
  },
  {
    title: "Warehouse Pigeon & Duct Nets",
    description:
      "High-ceiling bird-exclusion netting and duct shaft protection for warehouses, godowns and commercial complexes.",
    image: "/images/warehouse-pigeon-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85",
    tag: "Commercial Protection",
  },
  {
    title: "Duct Area Safety Nets",
    description:
      "Custom-fitted netting solutions for duct areas to help prevent bird entry and improve property safety.",
    image: "/images/duct-area-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85",
    tag: "Duct Protection",
  },
  {
    title: "Bird Spikes & Pigeon Control",
    description:
      "Polycarbonate bird spikes and pigeon-control systems for ledges, parapets, window edges and AC units.",
    image: "/images/bird-spikes.webp",
    fallback:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=900&q=85",
    tag: "Pigeon Control",
  },
  {
    title: "Pigeon Safety Nets",
    description:
      "Customized UV-resistant pigeon safety nets for balconies and windows to keep birds out while retaining natural light and airflow.",
    image: "/images/pigeon-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=900&q=85",
    tag: "Bird Protection",
  },
  {
    title: "Monkey Safety Nets",
    description:
      "Strong, tamper-resistant netting solutions designed to help protect balconies and open spaces from monkey intrusion.",
    image: "/images/monkey-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=900&q=85",
    tag: "Special Protection",
  },
  {
    title: "All Sports Nets",
    description:
      "Sports netting solutions for cricket, football, volleyball and practice areas for schools, academies and sports facilities.",
    image: "/images/sports-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=85",
    tag: "Sports Solutions",
  },
];

function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(".svs-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) =>
        el.classList.add("svs-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("svs-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="svs-services">

      <style>{`

        .svs-services {
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

        .svs-services * {
          box-sizing: border-box;
        }

        .svs-services a {
          text-decoration: none;
        }

        .svs-container {
          width: 92%;
          max-width: 1400px;
          margin: auto;
        }

        /* ANIMATIONS */

        .svs-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity .75s ease,
            transform .75s cubic-bezier(.2,.8,.2,1);
        }

        .svs-reveal.svs-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */

        .svs-hero {
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
            url("/images/services-banner.webp") center/cover no-repeat;
        }

        .svs-hero::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          border: 45px solid rgba(255,104,27,.22);
          border-radius: 50%;
          right: -90px;
          top: -180px;
        }

        .svs-hero::after {
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

        .svs-hero-content {
          position: relative;
          z-index: 2;
          width: 92%;
          max-width: 1400px;
          margin: auto;
          padding: 75px 0;
          color: white;
        }

        .svs-hero-content small {
          color: var(--gold);
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 800;
          text-transform: uppercase;
          display: block;
          margin-bottom: 15px;
        }

        .svs-hero-content h1 {
          font-size: clamp(38px,5vw,65px);
          font-weight: 850;
          letter-spacing: -1px;
          line-height: 1.15;
          margin: 0 0 17px;
        }

        .svs-hero-content h1 span {
          color: var(--gold);
        }

        .svs-hero-content p {
          color: #e1edf8;
          font-size: 15px;
          line-height: 1.9;
          max-width: 650px;
          margin: 0;
        }

        .svs-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
          font-size: 13px;
          color: #d5e4f1;
        }

        .svs-breadcrumb a {
          color: white;
        }

        .svs-breadcrumb svg,
        .svs-breadcrumb span {
          color: var(--orange);
        }

        /* INTRO */

        .svs-intro {
          padding: 65px 0 20px;
          text-align: center;
        }

        .svs-label {
          display: block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 10px;
        }

        .svs-intro h2 {
          font-size: clamp(28px,3vw,40px);
          color: var(--navy);
          font-weight: 850;
          margin: 0;
        }

        .svs-line {
          height: 4px;
          width: 85px;
          background: linear-gradient(90deg,var(--orange),var(--gold));
          margin: 15px auto;
          border-radius: 10px;
        }

        .svs-intro p {
          max-width: 750px;
          margin: 0 auto;
          font-size: 14px;
          line-height: 1.9;
          color: #718398;
        }

        /* SERVICE GRID */

        .svs-grid-section {
          padding: 45px 0 85px;
          background: var(--light);
        }

        .svs-grid {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 27px;
        }

        /* SERVICE CARD */

        .svs-card {
          min-width: 0;
          background: white;
          overflow: hidden;
          border-radius: 17px;
          border: 1px solid #e6edf4;
          box-shadow: 0 8px 25px rgba(3,44,78,.06);
          transition:
            transform .4s ease,
            box-shadow .4s ease,
            border-color .4s ease;
        }

        .svs-card:hover {
          transform: translateY(-9px);
          box-shadow: 0 18px 40px rgba(3,44,78,.14);
          border-color: var(--orange);
        }

        .svs-image {
          height: 245px;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #e8eef5;
        }

        .svs-image img {
          display: block;
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform .65s ease;
        }

        .svs-card:hover .svs-image img {
          transform: scale(1.09);
        }

        .svs-image::after {
          content: "";
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(transparent,rgba(2,39,70,.48));
          pointer-events: none;
        }

        .svs-tag {
          position: absolute;
          z-index: 2;
          left: 16px;
          top: 16px;
          padding: 8px 13px;
          border-radius: 30px;
          color: white;
          background: var(--orange);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .svs-card-number {
          position: absolute;
          z-index: 2;
          right: 16px;
          bottom: 14px;
          color: white;
          font-size: 24px;
          font-weight: 850;
          opacity: .9;
        }

        .svs-card-body {
          padding: 23px;
        }

        .svs-card-title {
          font-size: 19px;
          font-weight: 850;
          line-height: 1.4;
          color: var(--navy);
          margin: 0 0 12px;
          min-height: 52px;
        }

        .svs-card-description {
          color: #718398;
          font-size: 13px;
          line-height: 1.85;
          margin: 0 0 20px;
          min-height: 72px;
        }

        .svs-card-divider {
          height: 1px;
          width: 100%;
          background: #e9eef4;
          margin-bottom: 18px;
        }

        .svs-card-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #536b81;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .svs-card-feature svg {
          color: var(--orange);
          font-size: 13px;
        }

        /* BUTTONS */

        .svs-card-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .svs-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          min-width: 0;
          padding: 13px 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          transition: .3s ease;
        }

        .svs-call {
          color: white;
          background: var(--navy);
        }

        .svs-call:hover {
          background: var(--orange);
          transform: translateY(-3px);
        }

        .svs-whatsapp {
          background: #e9f8ef;
          color: #138849;
        }

        .svs-whatsapp:hover {
          color: white;
          background: #128c50;
          transform: translateY(-3px);
        }

        /* CTA */

        .svs-cta {
          padding: 75px 5%;
          text-align: center;
          background: linear-gradient(120deg,#ff671b,#ff9b21);
        }

        .svs-cta h2 {
          font-size: clamp(27px,3.5vw,42px);
          color: white;
          font-weight: 850;
          margin: 0 0 14px;
        }

        .svs-cta p {
          color: white;
          max-width: 680px;
          margin: 0 auto 26px;
          font-size: 14px;
          line-height: 1.8;
        }

        .svs-cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .svs-cta-buttons a {
          min-width: 175px;
          padding: 14px 24px;
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: white;
          color: var(--navy);
          font-size: 13px;
          font-weight: 800;
          transition: .3s ease;
        }

        .svs-cta-buttons a:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,.15);
        }

        .svs-cta-buttons .svs-cta-whatsapp {
          background: #128c50;
          color: white;
        }

        /* TABLET */

        @media(max-width:1050px) {
          .svs-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 20px;
          }

          .svs-image {
            height: 220px;
          }
        }

        /* MOBILE */

        @media(max-width:700px) {

          .svs-container {
            width: 92%;
          }

          .svs-hero {
            min-height: 280px;
          }

          .svs-hero-content {
            padding: 55px 0;
          }

          .svs-hero-content h1 {
            font-size: 37px;
          }

          .svs-hero-content p {
            font-size: 13px;
          }

          .svs-intro {
            padding: 48px 0 15px;
          }

          .svs-intro h2 {
            font-size: 27px;
          }

          .svs-intro p {
            font-size: 12px;
          }

          .svs-grid-section {
            padding: 30px 0 55px;
          }

          /* EXACTLY ONE CARD PER ROW ON MOBILE */

          .svs-grid {
            grid-template-columns: minmax(0,1fr);
            gap: 20px;
          }

          .svs-card {
            width: 100%;
          }

          .svs-image {
            height: 235px;
          }

          .svs-card-body {
            padding: 20px;
          }

          .svs-card-title {
            font-size: 18px;
            min-height: 0;
          }

          .svs-card-description {
            font-size: 12px;
            min-height: 0;
          }

          .svs-card-buttons {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
          }

          .svs-btn {
            font-size: 12px;
            padding: 13px 6px;
          }

          .svs-cta {
            padding: 55px 5%;
          }

          .svs-cta h2 {
            font-size: 27px;
          }

          .svs-cta p {
            font-size: 12px;
          }

          .svs-cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .svs-cta-buttons a {
            width: 100%;
            max-width: 280px;
          }
        }

        @media(max-width:380px) {
          .svs-image {
            height: 205px;
          }

          .svs-card-title {
            font-size: 17px;
          }

          .svs-btn {
            font-size: 11px;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .svs-services *,
          .svs-services *::before,
          .svs-services *::after {
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }

          .svs-reveal {
            opacity: 1;
            transform: none;
          }
        }

      `}</style>

      {/* HERO SECTION */}

      <section className="svs-hero">

        <div className="svs-hero-content svs-reveal">

          <small>Sri Venkateshwara Safety Nets</small>

          <h1>
            Our <span>Services</span>
          </h1>

          <p>
            Discover reliable safety nets, invisible grills,
            bird protection and customized safety solutions
            for homes, apartments and commercial spaces.
          </p>

          <div className="svs-breadcrumb">
            <a href="/">Home</a>
            <FaArrowRight />
            <span>Services</span>
          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="svs-intro">

        <div className="svs-container svs-reveal">

          <span className="svs-label">
            What We Offer
          </span>

          <h2>
            Professional Safety Solutions
          </h2>

          <div className="svs-line" />

          <p>
            We provide a wide range of safety and protection
            solutions designed for residential and commercial
            requirements. From balcony safety nets to invisible
            grills and sports netting, explore our services
            and find the right solution for your space.
          </p>

        </div>

      </section>

      {/* ALL SERVICES */}

      <section className="svs-grid-section">

        <div className="svs-container">

          <div className="svs-grid">

            {services.map((service, index) => (

              <article
                className="svs-card svs-reveal"
                key={service.title}
                style={{
                  transitionDelay: `${(index % 3) * 90}ms`,
                }}
              >

                <div className="svs-image">

                  <img
                    src={service.image}
                    alt={`${service.title} installation by Sri Venkateshwara Safety Nets`}
                    loading="lazy"
                    onError={(e) => {
                      if (e.currentTarget.src !== service.fallback) {
                        e.currentTarget.src = service.fallback;
                      }
                    }}
                  />

                  <span className="svs-tag">
                    {service.tag}
                  </span>

                  <span className="svs-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                <div className="svs-card-body">

                  <h3 className="svs-card-title">
                    {service.title}
                  </h3>

                  <p className="svs-card-description">
                    {service.description}
                  </p>

                  <div className="svs-card-divider" />

                  <div className="svs-card-feature">
                    <FaCheckCircle />
                    Customized Safety Solutions
                  </div>

                  <div className="svs-card-buttons">

                    <a
                      href={`tel:+91${PHONE}`}
                      className="svs-btn svs-call"
                      aria-label={`Call about ${service.title}`}
                    >
                      <FaPhoneAlt />
                      Call Now
                    </a>

                    <a
                      href={whatsappLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="svs-btn svs-whatsapp"
                      aria-label={`WhatsApp about ${service.title}`}
                    >
                      <FaWhatsapp />
                      WhatsApp
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}

      <section className="svs-cta">

        <div className="svs-container svs-reveal">

          <h2>
            Looking For The Right Safety Solution?
          </h2>

          <p>
            Let us help you choose suitable safety nets,
            invisible grills and protection solutions for
            your home or commercial property.
            Contact us today for enquiries.
          </p>

          <div className="svs-cta-buttons">

            <a href={`tel:+91${PHONE}`}>
              <FaPhoneAlt />
              Call Us Now
            </a>

            <a
              href={whatsappLink("safety net services")}
              target="_blank"
              rel="noopener noreferrer"
              className="svs-cta-whatsapp"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Services;
