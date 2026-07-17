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
          We help businesses build fast, secure, and scalable digital solutions
          that solve real-world challenges. From high-performing websites and
          web applications to cross-platform mobile apps, we handle everything
          from intuitive user interfaces and powerful backend systems to secure
          authentication and seamless database integration. Every solution we
          create is designed to improve efficiency, enhance user experience, and
          support long-term business growth.
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
            We turn your ideas into scalable, user-friendly digital solutions
            that solve real business problems. From planning to launch, we build
            high-quality websites, web apps, and mobile apps designed to help
            your business grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
