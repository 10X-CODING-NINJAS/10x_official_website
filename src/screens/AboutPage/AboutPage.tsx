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
      </div>
    </section>
  );
};

export default AboutPage;