import { useEffect, useRef, useState } from "react";

const ImageSection = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const refs = {
    sec1: useRef(null),
    sec2: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
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
    <section className="image-page">
      <div
        ref={refs.sec1}
        data-id="sec1"
        className={`sec-image ${visibleSections["sec1"] ? "slide-in" : ""}`}
      >
        <h2>Web apps</h2>
        <img className="img1" src="/images (14).jpeg" alt="web app" />
      </div>

      <div
        ref={refs.sec2}
        data-id="sec2"
        className={`sec-image ${visibleSections["sec2"] ? "slide-in" : ""}`}
      >
        <h2>Mobile apps</h2>
        <img className="img2" src="/images (22).jpeg" alt="mobile app" />
      </div>
    </section>
  );
};

export default ImageSection;
