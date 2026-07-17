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
            We build fast, secure, and scalable websites and web applications
            tailored to your business goals. From modern UI/UX design and
            responsive frontends to powerful backend systems, APIs,
            authentication, and database integration, we deliver complete web
            solutions that improve user experience, streamline operations, and
            help your business grow.
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
            We build fast, scalable, and user-friendly mobile apps for Android
            and iOS from a single codebase. From intuitive UI/UX and seamless
            API integration to secure backend systems and cloud services, we
            create high-performance mobile applications that engage users and
            help businesses grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expirence;
