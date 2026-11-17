
import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaShieldAlt,
  FaCog,
  FaGem,
  FaUsers,
  FaCheckCircle,
  FaMapMarkerAlt,

} from "react-icons/fa";

const PHONE = "6281524402";
const WHATSAPP = "916281524402";

const whatsappLink = (service) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hello Sri Venkateshwara Safety Nets, I am interested in ${service}. Please share the details.`
  )}`;

const heroSlides = [
  {
    title: "Protecting Homes,",
    highlight: "Securing Lives",
    description:
      "Premium Safety Nets & Invisible Grills for a Safer and Happier Life.",
    image: "/images/banner.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85",
    position: "center 48%",
  },
  {
    title: "Your Family's Safety,",
    highlight: "Our Priority",
    description:
      "Reliable Balcony Safety Nets and Invisible Grills for Modern Homes.",
    image: "/images/banner1.webp",
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=85",
    position: "center 45%",
  },
  {
    title: "Enjoy Open Spaces,",
    highlight: "Stay Protected",
    description:
      "Advanced Safety Solutions for Balconies, Terraces, Windows and Apartments.",
    image: "/images/banner2.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&q=85",
    position: "center 50%",
  },
];

const services = [
  {
    title: "Balcony Safety Nets",
    description:
      "High-strength HDPE nets for balconies to prevent falls and ensure child and pet safety without blocking your view.",
    image: "/images/balcony-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
  },
  {
    title: "Invisible Grill for Balcony",
    description:
      "Stainless steel invisible grills with 2mm cables, elegant and rust-resistant for modern balconies.",
    image: "/images/invisible-grills.webp",
    fallback:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=80",
  },
  {
    title: "Anti Bird Netting",
    description:
      "Durable bird-proof nets to keep pigeons and birds away from balconies, ducts and terraces.",
    image: "/images/anti-bird-netting.webp",
    fallback:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=700&q=80",
  },
  {
    title: "Children Safety Nets",
    description:
      "Extra-strong nets designed to protect children from accidental falls from balconies and windows.",
    image: "/images/children-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=700&q=80",
  },
  {
    title: "Terrace Shed Covering Safety Nets",
    description:
      "Durable weather-resistant safety nets designed to cover terrace sheds, preventing bird nesting and hazards.",
    image: "/images/terrace-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
  },
  {
    title: "Ceiling Cloth Hanger",
    description:
      "Space-saving ceiling-mounted cloth drying hanger systems with an easy pulley mechanism for balconies.",
    image: "/images/ceiling-cloth-hanger.webp",
    fallback:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=700&q=80",
  },
  {
    title: "Pet & Cat Safety Nets",
    description:
      "Secure netting solutions to keep your pets safe on balconies and open areas.",
    image: "/images/pet-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80",
  },
  {
    title: "Apartment Balcony & Duct Netting",
    description:
      "Complete balcony pigeon-proofing and duct shaft protection for apartments, villas and residential communities.",
    image: "/images/apartment-duct-netting.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=80",
  },
  {
    title: "Warehouse Pigeon & Duct Nets",
    description:
      "High-ceiling bird exclusion netting and duct shaft protection for warehouses, godowns and commercial complexes.",
    image: "/images/warehouse-pigeon-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=80",
  },
  {
    title: "Duct Area Safety Nets",
    description:
      "Custom-fitted nets for duct areas to prevent bird entry and ensure safety.",
    image: "/images/duct-area-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80",
  },
  {
    title: "Bird Spikes & Pigeon Control",
    description:
      "Polycarbonate bird spikes and control systems for ledges, parapets and AC units.",
    image: "/images/bird-spikes.webp",
    fallback:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=700&q=80",
  },
  {
    title: "Pigeon Safety Nets",
    description:
      "Customized UV-resistant pigeon safety nets for balconies and windows to keep birds out while retaining light and breeze.",
    image: "/images/pigeon-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1555169062-013468b47731?w=700&q=80",
  },
  {
    title: "Monkey Safety Nets",
    description:
      "Strong, tamper-resistant netting solutions to protect balconies and open spaces from monkey intrusion.",
    image: "/images/monkey-safety-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=700&q=80",
  },
  {
    title: "All Sports Nets",
    description:
      "Quality cricket, football, volleyball and sports practice nets for schools, playgrounds and sports facilities.",
    image: "/images/sports-nets.webp",
    fallback:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&q=80",
  },
];

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Safety First",
    description: "Protection for your family",
  },
  {
    icon: <FaCog />,
    title: "Professional Installation",
    description: "Expert fitting solutions",
  },
  {
    icon: <FaGem />,
    title: "Quality Solutions",
    description: "Reliable materials",
  },
  {
    icon: <FaUsers />,
    title: "Customer Satisfaction",
    description: "Service you can trust",
  },
];

const locations = [
  "Marathahalli",
  "Whitefield",
  "Brookefield",
  "Bellandur",
  "HSR Layout",
  "Sarjapur Road",
  "Electronic City",
  "Indiranagar",
  "Koramangala",
  "BTM Layout",
  "KR Puram",
  "Mahadevapura",
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  // HERO CAROUSEL
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // SCROLL REVEAL ANIMATION
  useEffect(() => {
    const elements = document.querySelectorAll(".sv-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("sv-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sv-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <main className="sv-home">

      <style>{`

        .sv-home {
          --navy: #06345b;
          --dark-navy: #022746;
          --orange: #ff681b;
          --gold: #ffb52e;
          --light: #f5f9ff;
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: var(--navy);
          font-family: "Poppins", "Segoe UI", Arial, sans-serif;
        }

        .sv-home * {
          box-sizing: border-box;
        }

        .sv-home a {
          text-decoration: none;
        }

        .sv-container {
          width: 92%;
          max-width: 1450px;
          margin: auto;
        }

        /* REVEAL ANIMATIONS */

        .sv-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .sv-reveal.sv-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* HERO */

        .sv-hero {
          width: 100%;
          min-height: 530px;
          display: grid;
          grid-template-columns: 46% 54%;
          background: var(--dark-navy);
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .sv-hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 65px 30px 65px 8%;
          color: white;
          background:
            radial-gradient(circle at 80% 80%, #164b70, transparent 45%),
            linear-gradient(120deg, #03294b, #063d69);
        }

        .sv-hero-content::after {
          content: "";
          position: absolute;
          width: 130px;
          height: 130%;
          right: -65px;
          top: -15%;
          background: var(--orange);
          transform: rotate(9deg);
          z-index: -1;
        }

        .sv-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 800;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .sv-hero-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--orange);
        }

        .sv-hero-title {
          font-size: clamp(37px, 4.3vw, 67px);
          line-height: 1.09;
          font-weight: 850;
          letter-spacing: -2px;
          margin: 0;
          color: white;
        }

        .sv-hero-title span {
          display: block;
          color: var(--gold);
        }

        .sv-hero-description {
          font-size: clamp(15px, 1.5vw, 21px);
          line-height: 1.6;
          color: #e8f2fc;
          max-width: 510px;
          margin: 20px 0 28px;
        }

        .sv-hero-features {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 32px;
        }

        .sv-hero-feature {
          text-align: center;
          padding: 0 8px;
          border-right: 1px solid rgba(255,255,255,.5);
        }

        .sv-hero-feature:last-child {
          border: 0;
        }

        .sv-hero-feature svg {
          font-size: 25px;
          margin-bottom: 8px;
          color: white;
        }

        .sv-hero-feature p {
          margin: 0;
          font-size: 11px;
          font-weight: 650;
          line-height: 1.4;
          color: white;
        }

        .sv-hero-buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .sv-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 15px 25px;
          border-radius: 35px;
          font-size: 14px;
          font-weight: 800;
          transition: .3s ease;
          cursor: pointer;
        }

        .sv-btn-primary {
          background: linear-gradient(120deg, #ff8a00, #ffbd38);
          color: #062d50;
          border: 2px solid transparent;
        }

        .sv-btn-outline {
          color: white;
          border: 2px solid var(--gold);
          background: transparent;
        }

        .sv-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,.2);
        }

        /* HERO IMAGE */

        
/* HERO IMAGE - SHOW COMPLETE IMAGE */

.sv-hero-image {
  position: relative;
  min-width: 0;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  aspect-ratio: 1600 / 704;
  height: auto;
  min-height: 0;
}

.sv-hero-image img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: contain;
  object-position: center center;
  display: block;
  animation: none;
}


        @keyframes svImageZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.07);
          }
        }

        .sv-hero-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(2,39,70,.15),
            transparent 45%
          );
          pointer-events: none;
        }

        .sv-hero-dots {
          position: absolute;
          bottom: 24px;
          right: 30px;
          z-index: 4;
          display: flex;
          gap: 9px;
        }

        .sv-hero-dot {
          width: 11px;
          height: 11px;
          border: 2px solid white;
          background: transparent;
          border-radius: 50px;
          padding: 0;
          cursor: pointer;
          transition: .3s;
        }

        .sv-hero-dot.active {
          width: 32px;
          background: var(--orange);
          border-color: var(--orange);
        }

        .sv-hero-caption {
          position: absolute;
          z-index: 3;
          bottom: 60px;
          right: 30px;
          background: rgba(3,43,76,.83);
          color: white;
          padding: 12px 20px;
          border-left: 3px solid var(--orange);
          font-size: 12px;
          font-weight: 700;
          border-radius: 5px;
        }

        /* SECTION HEADINGS */

        .sv-section {
          padding: 75px 0;
        }

        .sv-section-heading {
          text-align: center;
          margin-bottom: 40px;
        }

        .sv-section-heading small {
          display: block;
          color: var(--orange);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 9px;
        }

        .sv-section-heading h2 {
          font-size: clamp(28px, 3vw, 39px);
          color: var(--navy);
          margin: 0;
          font-weight: 850;
        }

        .sv-heading-line {
          width: 95px;
          height: 4px;
          margin: 15px auto 0;
          border-radius: 10px;
          background: linear-gradient(90deg, var(--orange), var(--gold));
        }

        .sv-section-heading p {
          color: #687d91;
          font-size: 14px;
          max-width: 650px;
          margin: 15px auto 0;
          line-height: 1.8;
        }

        /* SERVICES GRID */

        .sv-services-section {
          background:
            radial-gradient(circle at 0% 20%, #fff4e8, transparent 28%),
            #f5f9ff;
        }

        .sv-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }

        .sv-service-card {
          min-width: 0;
          background: white;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e2eaf3;
          box-shadow: 0 8px 25px rgba(4,44,77,.08);
          transition:
            transform .4s ease,
            box-shadow .4s ease,
            border-color .4s ease;
          display: flex;
          flex-direction: column;
        }

        .sv-service-card:hover {
          transform: translateY(-10px);
          border-color: var(--orange);
          box-shadow: 0 18px 40px rgba(4,44,77,.15);
        }

        .sv-service-image {
          height: 220px;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #dce9f3;
        }

        .sv-service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform .65s ease;
        }

        .sv-service-card:hover .sv-service-image img {
          transform: scale(1.09);
        }

        .sv-service-image::after {
          content: "";
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(transparent, rgba(0,25,48,.2));
          pointer-events: none;
        }

        .sv-service-content {
          padding: 23px 22px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .sv-service-content h3 {
          color: var(--navy);
          font-size: 19px;
          font-weight: 800;
          line-height: 1.4;
          margin: 0 0 12px;
        }

        .sv-service-content p {
          font-size: 13px;
          line-height: 1.8;
          color: #697d91;
          margin: 0 0 22px;
          flex: 1;
        }

        .sv-service-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: auto;
        }

        .sv-service-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 12px 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          transition: .3s ease;
          white-space: nowrap;
        }

        .sv-call-btn {
          color: white;
          background: var(--navy);
        }

        .sv-call-btn:hover {
          background: var(--orange);
          transform: translateY(-3px);
        }

        .sv-whatsapp-btn {
          color: white;
          background: #159b59;
        }

        .sv-whatsapp-btn:hover {
          background: #087d43;
          transform: translateY(-3px);
        }

        /* ABOUT SECTION */

        .sv-about-section {
          background: white;
        }

        .sv-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        

/* ABOUT IMAGE - FULL IMAGE VISIBLE ON ALL SCREENS */

.sv-about-image {
  position: relative;
  width: 100%;
  min-width: 0;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sv-about-image img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  object-position: center center;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(3,44,78,.15);
}

        .sv-about-badge {
          position: absolute;
          right: -18px;
          bottom: 25px;
          background: var(--orange);
          color: white;
          padding: 19px 24px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 15px;
          box-shadow: 0 10px 25px rgba(255,104,27,.25);
        }

        .sv-about-content small {
          color: var(--orange);
          letter-spacing: 2px;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .sv-about-content h2 {
          font-size: clamp(30px, 3vw, 43px);
          line-height: 1.2;
          font-weight: 850;
          margin: 13px 0 20px;
          color: var(--navy);
        }

        .sv-about-content h2 span {
          color: var(--orange);
        }

        .sv-about-content > p {
          font-size: 14px;
          color: #687d91;
          line-height: 1.9;
          margin-bottom: 23px;
        }

        .sv-about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 28px;
        }

        .sv-about-point {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 750;
          color: var(--navy);
        }

        .sv-about-point svg {
          color: var(--orange);
          flex-shrink: 0;
        }

        /* WHY CHOOSE US */

        .sv-why-section {
          background: linear-gradient(120deg, #03294b, #06416c);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .sv-why-section .sv-section-heading h2 {
          color: white;
        }

        .sv-why-section .sv-section-heading p {
          color: #d0dfec;
        }

        .sv-why-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .sv-why-card {
          text-align: center;
          padding: 30px 18px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.06);
          border-radius: 15px;
          transition: .35s ease;
        }

        .sv-why-card:hover {
          background: rgba(255,255,255,.13);
          transform: translateY(-8px);
          border-color: var(--orange);
        }

        .sv-why-icon {
          width: 62px;
          height: 62px;
          margin: 0 auto 18px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: var(--orange);
          color: white;
          font-size: 26px;
        }

        .sv-why-card h3 {
          font-size: 16px;
          margin: 0 0 10px;
          color: white;
        }

        .sv-why-card p {
          color: #d1deea;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        /* SERVICE AREAS */

        .sv-location-section {
          background: #f5f9ff;
        }

        .sv-location-box {
          background: white;
          border: 1px solid #e4ebf3;
          border-radius: 18px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(3,44,78,.06);
        }

        .sv-location-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .sv-location-title svg {
          font-size: 28px;
          color: var(--orange);
        }

        .sv-location-title h3 {
          font-size: 21px;
          margin: 0;
          font-weight: 850;
        }

        .sv-location-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .sv-location-list span {
          background: #f0f5fa;
          color: var(--navy);
          border: 1px solid #e0e9f2;
          border-radius: 30px;
          padding: 10px 17px;
          font-size: 13px;
          font-weight: 650;
          transition: .3s ease;
        }

        .sv-location-list span:hover {
          color: white;
          background: var(--orange);
          border-color: var(--orange);
          transform: translateY(-3px);
        }

        /* CTA */

        .sv-cta-section {
          padding: 75px 5%;
          background: linear-gradient(120deg, #ff671b, #ff9b21);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .sv-cta-section h2 {
          color: white;
          font-size: clamp(27px, 3.4vw, 41px);
          margin: 0 0 13px;
          font-weight: 850;
        }

        .sv-cta-section p {
          color: white;
          font-size: 14px;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 25px;
        }

        .sv-cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        .sv-cta-call {
          color: var(--navy);
          background: white;
        }

        .sv-cta-whatsapp {
          color: white;
          border: 2px solid white;
          background: transparent;
        }

        .sv-cta-call:hover,
        .sv-cta-whatsapp:hover {
          transform: translateY(-4px);
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {
          .sv-hero {
            min-height: 470px;
          }

          .sv-hero-image img {
            min-height: 470px;
          }

          .sv-hero-content {
            padding-left: 6%;
          }

          .sv-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sv-about-grid {
            gap: 35px;
          }

          .sv-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {

          .sv-container {
            width: 92%;
          }

          /* MOBILE HERO IMAGE */

          .sv-hero {
            display: flex;
            flex-direction: column;
            min-height: auto;
            background: var(--dark-navy);
          }

          .sv-hero-content {
            order: 1;
            padding: 38px 6% 32px;
            background:
              radial-gradient(circle at 90% 80%, #164b70, transparent 45%),
              linear-gradient(120deg, #03294b, #063d69);
          }

          .sv-hero-content::after {
            display: none;
          }

          .sv-hero-eyebrow {
            font-size: 10px;
            margin-bottom: 13px;
          }

          .sv-hero-title {
            font-size: clamp(34px, 9vw, 45px);
            letter-spacing: -1px;
            line-height: 1.12;
          }

          .sv-hero-description {
            font-size: 14px;
            margin: 14px 0 20px;
          }

          .sv-hero-features {
            gap: 4px;
            margin-bottom: 23px;
          }

          .sv-hero-feature {
            padding: 0 3px;
          }

          .sv-hero-feature svg {
            font-size: 21px;
          }

          .sv-hero-feature p {
            font-size: 9px;
          }

          .sv-hero-buttons {
            gap: 10px;
          }

          .sv-btn {
            padding: 13px 17px;
            font-size: 12px;
          }

          
/* MOBILE - COMPLETE BANNER IMAGE */

.sv-hero-image {
  order: 2;
  width: 100%;
  height: auto;
  min-height: 0;
  aspect-ratio: 1600 / 704;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #ffffff;
}

.sv-hero-image img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: contain;
  object-position: center center;
  animation: none;
}


          .sv-hero-caption {
            bottom: 38px;
            right: 15px;
            font-size: 10px;
            padding: 9px 12px;
          }

          .sv-hero-dots {
            right: 15px;
            bottom: 12px;
          }

          /* MOBILE SECTION SPACING */

          .sv-section {
            padding: 52px 0;
          }

          .sv-section-heading {
            margin-bottom: 28px;
          }

          .sv-section-heading h2 {
            font-size: 27px;
          }

          .sv-section-heading p {
            font-size: 12px;
            padding: 0 5px;
          }

          /* IMPORTANT: ONE CARD PER ROW */

          .sv-services-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
          }

          .sv-service-card {
            width: 100%;
            max-width: 430px;
            margin: 0 auto;
            border-radius: 16px;
          }

          .sv-service-image {
            height: 235px;
            min-height: 235px;
          }

          .sv-service-image img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }

          .sv-service-content {
            padding: 19px;
          }

          .sv-service-content h3 {
            font-size: 18px;
          }

          .sv-service-content p {
            font-size: 13px;
            margin-bottom: 19px;
          }

          .sv-service-actions {
            gap: 9px;
          }

          .sv-service-btn {
            padding: 13px 6px;
            font-size: 12px;
          }

          /* ABOUT */

          .sv-about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .sv-about-image img {
            height: 290px;
          }

          .sv-about-badge {
            right: 10px;
            bottom: 12px;
            padding: 12px 15px;
            font-size: 12px;
          }

          .sv-about-content h2 {
            font-size: 30px;
          }

          .sv-about-content > p {
            font-size: 13px;
          }

          .sv-about-points {
            gap: 14px 8px;
          }

          .sv-about-point {
            font-size: 11px;
          }

          /* WHY CHOOSE US */

          .sv-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .sv-why-card {
            padding: 22px 10px;
          }

          .sv-why-card h3 {
            font-size: 13px;
          }

          .sv-why-card p {
            font-size: 11px;
          }

          .sv-why-icon {
            width: 49px;
            height: 49px;
            font-size: 21px;
          }

          /* LOCATIONS */

          .sv-location-box {
            padding: 20px 15px;
          }

          .sv-location-title h3 {
            font-size: 17px;
          }

          .sv-location-list {
            gap: 8px;
          }

          .sv-location-list span {
            font-size: 11px;
            padding: 8px 11px;
          }

          /* CTA */

          .sv-cta-section {
            padding: 52px 5%;
          }

          .sv-cta-section h2 {
            font-size: 27px;
          }

          .sv-cta-section p {
            font-size: 13px;
          }

          .sv-cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .sv-cta-buttons .sv-btn {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 380px) {
          .sv-hero-title {
            font-size: 32px;
          }

          .sv-hero-image {
            height: 245px;
            min-height: 245px;
          }

          .sv-hero-image img {
            min-height: 245px;
          }

          .sv-service-image {
            height: 210px;
            min-height: 210px;
          }

          .sv-service-actions {
            grid-template-columns: 1fr 1fr;
          }

          .sv-service-btn {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-home *,
          .sv-home *::before,
          .sv-home *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }

          .sv-reveal {
            opacity: 1;
            transform: none;
          }
        }

      `}</style>

      {/* HERO SECTION */}

      <section className="sv-hero">

        <div className="sv-hero-content">

          <div className="sv-hero-eyebrow">
            Sri Venkateshwara Safety Nets
          </div>

          <h1 className="sv-hero-title">
            {currentSlide.title}
            <span>{currentSlide.highlight}</span>
          </h1>

          <p className="sv-hero-description">
            {currentSlide.description}
          </p>

          <div className="sv-hero-features">
            {features.map((feature) => (
              <div className="sv-hero-feature" key={feature.title}>
                {feature.icon}
                <p>{feature.title}</p>
              </div>
            ))}
          </div>

          <div className="sv-hero-buttons">
            <a href="/services" className="sv-btn sv-btn-primary">
              Our Services <FaArrowRight />
            </a>

            <a href={`tel:+91${PHONE}`} className="sv-btn sv-btn-outline">
              <FaPhoneAlt /> +91 6281524402
            </a>
          </div>

        </div>

        <div className="sv-hero-image">

          <img
            key={currentSlide.image}
            src={currentSlide.image}
            alt="Sri Venkateshwara Safety Nets installation"
            style={{ objectPosition: currentSlide.position }}
            onError={(e) => {
              if (e.currentTarget.src !== currentSlide.fallback) {
                e.currentTarget.src = currentSlide.fallback;
              }
            }}
          />

          <div className="sv-hero-caption">
            Premium Safety Solutions
          </div>

          <div className="sv-hero-dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                className={`sv-hero-dot ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>

        </div>

      </section>

      {/* SERVICES SECTION */}

      <section className="sv-section sv-services-section" id="services">

        <div className="sv-container">

          <div className="sv-section-heading sv-reveal">
            <small>What We Offer</small>
            <h2>Our Professional Services</h2>
            <div className="sv-heading-line" />
            <p>
              Complete safety and protection solutions for balconies,
              apartments, terraces, homes and commercial spaces across
              Bangalore.
            </p>
          </div>

          <div className="sv-services-grid">

            {services.map((service, index) => (
              <article
                className="sv-service-card sv-reveal"
                key={service.title}
                style={{
                  transitionDelay: `${(index % 3) * 100}ms`,
                }}
              >

                <div className="sv-service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      if (e.currentTarget.src !== service.fallback) {
                        e.currentTarget.src = service.fallback;
                      }
                    }}
                  />

                </div>

                <div className="sv-service-content">

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="sv-service-actions">

                    <a
                      href={`tel:+91${PHONE}`}
                      className="sv-service-btn sv-call-btn"
                    >
                      <FaPhoneAlt />
                      Call Now
                    </a>

                    <a
                      href={whatsappLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sv-service-btn sv-whatsapp-btn"
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

      {/* ABOUT SECTION */}

      <section className="sv-section sv-about-section">

        <div className="sv-container sv-about-grid">

          <div className="sv-about-image sv-reveal">

            <img
              src="/images/about.webp"
              alt="Professional safety net installation"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85";
              }}
            />

            <div className="sv-about-badge">
              <FaShieldAlt /> Safety Comes First
            </div>

          </div>

          <div className="sv-about-content sv-reveal">

            <small>About Sri Venkateshwara Safety Nets</small>

            <h2>
              Protecting Homes,
              <span> Securing Lives</span>
            </h2>

            <p>
              Sri Venkateshwara Safety Nets offers reliable safety
              solutions for homes, apartments and commercial spaces.
              From balcony safety nets and invisible grills to pigeon
              protection and sports nets, we provide customized
              solutions to help make your spaces safer.
            </p>

            <div className="sv-about-points">

              {[
                "Quality Materials",
                "Professional Installation",
                "Customized Solutions",
                "Reliable Safety Systems",
                "Residential Solutions",
                "Commercial Solutions",
              ].map((item) => (
                <div className="sv-about-point" key={item}>
                  <FaCheckCircle />
                  {item}
                </div>
              ))}

            </div>

            <a href="/about" className="sv-btn sv-btn-primary">
              About Us <FaArrowRight />
            </a>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="sv-section sv-why-section">

        <div className="sv-container">

          <div className="sv-section-heading sv-reveal">
            <small>Why Choose Us</small>
            <h2>Your Safety Is Our Priority</h2>
            <div className="sv-heading-line" />
            <p>
              We focus on quality, professional installation and
              practical safety solutions for every space.
            </p>
          </div>

          <div className="sv-why-grid">

            {[
              {
                icon: <FaShieldAlt />,
                title: "Safety First",
                description:
                  "Solutions designed to improve safety for families and properties.",
              },
              {
                icon: <FaCog />,
                title: "Expert Installation",
                description:
                  "Professional fitting with attention to detail.",
              },
              {
                icon: <FaGem />,
                title: "Quality Materials",
                description:
                  "Reliable materials selected for your safety requirements.",
              },
              {
                icon: <FaUsers />,
                title: "Customer Support",
                description:
                  "Helpful assistance throughout your service enquiry.",
              },
            ].map((item) => (
              <div className="sv-why-card sv-reveal" key={item.title}>

                <div className="sv-why-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICE LOCATIONS */}

      <section className="sv-section sv-location-section">

        <div className="sv-container">

          <div className="sv-section-heading sv-reveal">
            <small>Our Service Locations</small>
            <h2>Serving Across Bangalore</h2>
            <div className="sv-heading-line" />
            <p>
              Our safety net and invisible grill services are available
              across Bangalore and surrounding areas.
            </p>
          </div>

          <div className="sv-location-box sv-reveal">

            <div className="sv-location-title">
              <FaMapMarkerAlt />
              <h3>Popular Service Areas</h3>
            </div>

            <div className="sv-location-list">
              {locations.map((location) => (
                <span key={location}>{location}</span>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CONTACT CTA */}

      <section className="sv-cta-section">

        <div className="sv-container sv-reveal">

          <h2>
            Looking for Reliable Safety Solutions?
          </h2>

          <p>
            Make your home, balcony and commercial spaces safer.
            Contact Sri Venkateshwara Safety Nets today for your
            safety net and invisible grill requirements.
          </p>

          <div className="sv-cta-buttons">

            <a
              href={`tel:+91${PHONE}`}
              className="sv-btn sv-cta-call"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href={whatsappLink("safety net installation")}
              target="_blank"
              rel="noopener noreferrer"
              className="sv-btn sv-cta-whatsapp"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;
