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
          I'm a full-stack web and cross-platform mobile app developer focused
          on solving real business problems with technology. I build fast,
          scalable, and user-friendly digital products that are designed to
          perform, grow with your business, and deliver lasting value. Every
          project is backed by practical experience, attention to detail, and a
          commitment to quality.
        </p>
      </div>
    </section>
  );
};

export default ResumeAbout;
