import { useEffect, useRef, useState } from "react";

const Expirence = () => {
  const [visible, setVisible] = useState({});
  const refs = {
    h1: useRef(null),
    h3_1: useRef(null),
    p_1: useRef(null),
    h3_2: useRef(null),
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
    <section className="expirence-section">
      <h1
        ref={refs.h1}
        data-id="h1"
        className={`skills-h1 ${visible["h1"] ? "slide-in" : ""}`}
      >
        Our skills and Services
      </h1>

      <div className="content">
        <div className="sec-content">
          <h3
            ref={refs.h3_1}
            data-id="h3_1"
            className={`${visible["h3_1"] ? "slide-in" : ""}`}
          >
            Web apps development
          </h3>
          <p
            ref={refs.p_1}
            data-id="p_1"
            className={`${visible["p_1"] ? "slide-in" : ""}`}
          >
            We offer expert website and web application development services,
            transforming your online presence with cutting-edge technology. Our
            team of skilled developers leverages the latest tools, including
            HTML, CSS, JavaScript, React, Figma, Bootstrap, EJS, Express,
            Node.js, and MongoDB, to craft bespoke solutions that drive results.
            From custom website design and development to web application
            development with React and Node.js, we provide a range of services,
            including API integration and development, authentication and
            authorization solutions, database design and development with
            MongoDB, and UI/UX design with Figma and Bootstrap.
          </p>
        </div>

        <div className="sec-content">
          <h3
            ref={refs.h3_2}
            data-id="h3_2"
            className={`${visible["h3_2"] ? "slide-in" : ""}`}
          >
            Mobile apps development
          </h3>
          <p
            ref={refs.p_2}
            data-id="p_2"
            className={`${visible["p_2"] ? "slide-in" : ""}`}
          >
            We specialize in creating stunning, high-performance mobile
            applications for Android and iOS using Flutter and Dart, with
            Firebase as our backend. We brings your mobile app idea to life with
            custom design and development, leveraging the power of
            cross-platform development to reach a wider audience. We provide a
            range of services, including Firebase integration for backend
            services, API integration and development. With expertise in Flutter
            and Dart, we deliver fast development and deployment, beautiful
            native-like UI/UX, and scalable and secure solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expirence;
