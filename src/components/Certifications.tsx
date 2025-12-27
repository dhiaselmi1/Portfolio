import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DCDEE052EDDB5601D8B9A3D5E05ADDBC1A22D0987C15172694717353831ADF55",
    image: "/Certifications/professional.jpg",
  },
  {
    title: "  Oracle Cloud Infrastructure  AI Foundations",
    issuer: "Oracle",
    date: "Oct 2025",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6741FF04DE3C4AFAEF9F31BB539A1DBDB0C00B60CF7861FE3B5B9946462D5D8B",
    image: "/Certifications/associate.jpg",
  },
  {
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "Oct 2025",
    link: "https://www.nvidia.com/en-us/training",
    image: "/Certifications/NVIDIA.jpg",
  },
  {
    title: "AI Professional Certificate",
    issuer: "School of AI",
    date: "Sep 2025",
    link: "https://badgr.com/public/assertions/I8VZ0VdBRp2X_NQPH7jYLg?identity__email=Mohameddhiaselmii%40gmail.com",
    image: "/Certifications/AI.png",
  },
  {
    title: "CDOSS Artificial Intelligence and Machine Learning Fundamentals",
    issuer: "CDOSS",
    date: "Dec 2025",
    link: "https://cdoss.org/selmi-mohamed-dhia/",
    image: "/Certifications/CDOSS0.jpg",
  },
  {
    title: "CDOSS Python for Data Science",
    issuer: "CDOSS",
    date: "May 2025",
    link: "https://cdoss.org/mohamed-dhia-selmi/",
    image: "/Certifications/CDOSS.jpg",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (<SectionBackground>
    <section id="certifications">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Some courses I actually completed instead of just bookmarking them - fancy certificates!">Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  </SectionBackground>
  );
}
