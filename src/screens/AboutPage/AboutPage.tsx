import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { TextReveal } from "../../components/TextReveal";

const AboutPage: React.FC = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full section-spacing overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-main">
        {/* Section Marker removed */}

        {/* Block 1: WE LEARN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 lg:mb-32 items-start">
          <div className="reveal">
            <h2
              className="heading-display mb-4 lg:mb-0"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              <TextReveal text="WE LEARN." delay={0.2} />
            </h2>
          </div>
          <div className="reveal-up reveal-delay-1">
            <p className="body-text">
              Welcome to{" "}
              <strong>Coding Ninjas 10X Club SRM</strong>! We are a community of{" "}
              <strong>passionate coders</strong> and executives who love to
              explore the world of technology and push our limits to create
              innovative solutions. Our club is designed to provide a platform
              for students to <strong>learn, share, and grow</strong> their
              technical skills. We organize a variety of events throughout the
              year, including Hackathons and Workshops.
            </p>
          </div>
        </div>

        {/* Block 2: WE BUILD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 lg:mb-32 items-start">
          <div className="reveal-up order-2 lg:order-1">
            <p className="body-text">
              At <strong>Coding Ninjas 10X Club SRM</strong>, we believe that
              technology can be a force for good in the world. That's why we
              encourage our members to use their skills to solve real-world
              problems and make a{" "}
              <strong>positive impact on the society</strong>.
            </p>
          </div>
          <div className="reveal order-1 lg:order-2 lg:text-right">
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                color: "var(--accent)",
              }}
            >
              <TextReveal text="WE BUILD." delay={0.2} />
            </h2>
          </div>
        </div>

        {/* Block 3: WE CREATE IMPACT + Group Photo */}
        <div className="reveal text-center mb-16">
          <h2
            className="heading-display mx-auto"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            <TextReveal text="WE CREATE IMPACT." delay={0.1} />
          </h2>
        </div>

        {/* Divider */}
        <div className="divider reveal mb-12" />

        {/* Group Photo */}
        <div className="reveal-up">
          <div className="relative w-full overflow-hidden" style={{ borderRadius: "4px" }}>
            <img
              src="./About/Team.jpeg"
              alt="Coding Ninjas 10X Club SRM — community group photo"
              className="w-full h-auto object-cover"
              loading="lazy"
              style={{
                border: "1px solid var(--border)",
              }}
            />
            {/* Subtle overlay gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, var(--bg-primary), transparent)",
              }}
            />
          </div>
          <p
            className="label-upper text-center mt-6"
            style={{ color: "var(--text-tertiary)" }}
          >
            THE 10X COMMUNITY
          </p>
        </div>

        {/* Divider */}
        <div className="divider reveal mt-16 mb-12" />

        {/* Esteemed Faculty */}
        <div style={{ maxWidth: "65%", margin: "0 auto" }}>
          <div className="reveal text-center mb-10">
            <h2
              className="heading-display mx-auto"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              <TextReveal text="FACULTY COORDINATORS" delay={0.1} />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 reveal-up reveal-delay-1">
            {/* Dr. Iniyan S */}
            <div className="flex flex-col items-center">
              <div
                style={{
                  background: "#111",
                  border: "2px solid #c0392b",
                  borderRadius: "16px",
                  boxShadow: "0 0 18px 4px rgba(192, 57, 43, 0.55), inset 0 0 12px rgba(192, 57, 43, 0.12)",
                  padding: "16px",
                  width: "100%",
                }}
              >
                <img
                  src="./images/Dr. Iniyan S.jpg"
                  alt="Dr. Iniyan S"
                  className="w-full object-cover"
                  loading="lazy"
                  style={{ borderRadius: "12px", maxHeight: "340px" }}
                />
                <p
                  className="label-upper text-center mt-4"
                  style={{ color: "#fff", letterSpacing: "0.05em" }}
                >
                  Dr. Iniyan S
                  <br />
                  Associate Professor
                  <br />
                  Department of Computing Technologies
                </p>
              </div>
            </div>

            {/* Dr. Senthil Raja M */}
            <div className="flex flex-col items-center">
              <div
                style={{
                  background: "#111",
                  border: "2px solid #c0392b",
                  borderRadius: "16px",
                  boxShadow: "0 0 18px 4px rgba(192, 57, 43, 0.55), inset 0 0 12px rgba(192, 57, 43, 0.12)",
                  padding: "16px",
                  width: "100%",
                }}
              >
                <img
                  src="./images/Dr. Senthil Raja M.jpg"
                  alt="Dr. Senthil Raja M"
                  className="w-full object-cover"
                  loading="lazy"
                  style={{ borderRadius: "12px", maxHeight: "340px" }}
                />
                <p
                  className="label-upper text-center mt-4"
                  style={{ color: "#fff", letterSpacing: "0.05em" }}
                >
                  Dr. Senthil Raja M
                  <br />
                  Associate Professor
                  <br />
                  Department of Computing Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;