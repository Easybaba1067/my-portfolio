import { useEffect, useRef, useState } from "react";

const ResumeAbout = () => {
  const [visible, setVisible] = useState({});
  const refs = {
    h1: useRef(null),
    p: useRef(null),
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
        ref={refs.h1}
        data-id="h1"
        className={`about-h1 ${visible["h1"] ? "slide-in" : ""}`}
      >
        What's my Deal
      </h1>
      <div className="resume-about-content">
        <p
          ref={refs.p}
          data-id="p"
          className={`${visible["p"] ? "slide-in" : ""}`}
        >
          I am full-stack web developer and Cross platform mobile application
          developer with years of project based expirence, my strong expertise
          in front-end designing, back-end development, allows me to effectively
          design and develop scalable, user-friendly and efficient web apps and
          mobile applications. Am confidence with my skills and proud of my
          projects and expirence and it makes me strong.
        </p>
      </div>
    </section>
  );
};

export default ResumeAbout;
