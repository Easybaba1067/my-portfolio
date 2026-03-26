import { useEffect, useRef, useState } from "react";

const About = ({ color, button, scrollInto, head }) => {
  const [visible, setVisible] = useState({});
  const refs = {
    h1_1: useRef(null),
    p_1: useRef(null),
    h1_2: useRef(null),
    p_2: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  });

  return (
    <section className="about">
      <h1
        ref={refs.h1_1}
        data-id="h1_1"
        className={`about-h1 ${visible["h1_1"] ? "slide-in" : ""}`}
      >
        {head}
      </h1>
      <div className={color}>
        <p
          ref={refs.p_1}
          data-id="p_1"
          className={`${visible["p_1"] ? "slide-in" : ""}`}
        >
          We are a MERN Full-stack Web and Cross platform mobile application
          development company with great record of delivered projects, we
          possess a strong technologies in front-end development, back-end
          development, Authentication implemention and database integration,
          allowing us to effectively design and develop scalable, user-friendly
          and efficient web apps and mobile applications.
        </p>
      </div>

      <div className="about">
        <h1
          ref={refs.h1_2}
          data-id="h1_2"
          className={`about-h1 ${visible["h1_2"] ? "slide-in" : ""}`}
        >
          Vision and Mission
        </h1>
        <div className="mission">
          <p
            ref={refs.p_2}
            data-id="p_2"
            className={`${visible["p_2"] ? "slide-in" : ""}`}
          >
            Our goal is to turn your applications idea into a reality, and we're
            committed to providing exceptional service and support throughout
            the development process. Our passion for innovation and commitment
            to excellent drive me to stay up-to-date with industry trends and
            best practices, we have worked on so many projects and delivered a
            good design and responsive apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
