import { useEffect, useRef, useState } from "react";

const Career = ({ isActive, changeBackground }) => {
  const [visible, setVisible] = useState({});
  const refs = {
    h1: useRef(null),
    h2_1: useRef(null),
    p_1: useRef(null),
    h2_2: useRef(null),
    p_2: useRef(null),
    h2_3: useRef(null),
    p_3: useRef(null),
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

  const careerStyle = {
    fontSize: "1.4rem",
    padding: "10px",
    color: "rgba(24, 133, 206, 0.97)",
  };

  return (
    <section className="career">
      <div className="career-wrap">
        <h1
          ref={refs.h1}
          data-id="h1"
          className={`${visible["h1"] ? "slide-in" : ""}`}
        >
          what i do <i className="bi bi-briefcase" style={careerStyle}></i>
          <div className="line"></div>
        </h1>
        <div
          onClick={changeBackground}
          className={isActive ? "theme active" : "theme"}
        >
          <i className="mode1 bi bi-sun" style={careerStyle}></i>
          <i className="mode2 bi bi-moon" style={careerStyle}></i>
        </div>
      </div>

      <div className="career-summary">
        <div className="career-info">
          <div className="career-flex">
            <h2
              ref={refs.h2_1}
              data-id="h2_1"
              className={`${visible["h2_1"] ? "slide-in" : ""}`}
            >
              Web development
            </h2>
          </div>
          <p
            ref={refs.p_1}
            data-id="p_1"
            className={`${visible["p_1"] ? "slide-in" : ""}`}
          >
            As a web developer, i build and maintain websites and web apps using
            HTML, CSS, and JavaScript, React, etc for font-end and uses nodejs,
            express.js, EJS, MongoDB, passport.js, Firebase cloud and firebase
            auth for back-end. You ensure sites are user-friendly, visually
            appealing, and responsive. You work with designers and clients to
            create functional and accessible digital experiences.
          </p>
        </div>

        <div className="career-info">
          <div className="career-flex">
            <h2
              ref={refs.h2_2}
              data-id="h2_2"
              className={`${visible["h2_2"] ? "slide-in" : ""}`}
            >
              UI/UX designing
            </h2>
          </div>
          <p
            ref={refs.p_2}
            data-id="p_2"
            className={`${visible["p_2"] ? "slide-in" : ""}`}
          >
            As a UI/UX designer, i design user-friendly interfaces and enhance
            user experiences. i conduct research, create wireframes, and develop
            prototypes to ensure intuitive and visually appealing designs. My
            goal is to make digital interactions seamless and enjoyable for
            users.
          </p>
        </div>

        <div className="career-info">
          <div className="career-flex">
            <h2
              ref={refs.h2_3}
              data-id="h2_3"
              className={`${visible["h2_3"] ? "slide-in" : ""}`}
            >
              Mobile App development
            </h2>
          </div>
          <p
            ref={refs.p_3}
            data-id="p_3"
            className={`${visible["p_3"] ? "slide-in" : ""}`}
          >
            I design and build mobile applications for iOS and Android
            platforms. I code, test, and debug apps to ensure they are
            functional and user-friendly. I also collaborate with designers and
            clients to bring their app ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
