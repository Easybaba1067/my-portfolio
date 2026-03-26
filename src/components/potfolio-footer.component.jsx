import { useEffect, useRef, useState } from "react";

const Footer = ({ targetRef }) => {
  const [visible, setVisible] = useState({});
  const refs = {
    h1: useRef(null),
    mail: useRef(null),
    number: useRef(null),
    linkedin: useRef(null),
    facebook: useRef(null),
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
    <footer ref={targetRef} className="portfolio-contact">
      <h1
        ref={refs.h1}
        data-id="h1"
        className={`${visible["h1"] ? "slide-in" : ""}`}
      >
        let't work great things together
      </h1>

      <div className="contact-grid">
        <div
          ref={refs.mail}
          data-id="mail"
          className={`mail ${visible["mail"] ? "slide-in" : ""}`}
        >
          <i
            className="devicon-google-plain colored"
            style={{ fontSize: "1.5rem", color: "rgba(24, 133, 206, 0.97)" }}
          ></i>
          <p>theeasybstudio@gmail.com</p>
        </div>

        <div
          ref={refs.number}
          data-id="number"
          className={`number ${visible["number"] ? "slide-in" : ""}`}
        >
          <i
            className="bi bi-whatsapp"
            style={{ fontSize: "1.5rem", color: "rgba(24, 133, 206, 0.97)" }}
          ></i>
          <p>
            <a
              href="https://wa.me/234917190738"
              target="_blank"
              rel="noopener noreferrer"
            >
              +234-913-719-0738
            </a>
          </p>
        </div>

        <div
          ref={refs.linkedin}
          data-id="linkedin"
          className={`linkedin ${visible["linkedin"] ? "slide-in" : ""}`}
        >
          <i
            className="devicon-linkedin-plain colored"
            style={{ fontSize: "1.5rem", color: "rgba(24, 133, 206, 0.97)" }}
          ></i>
          <p>
            <a
              href="https://www.linkedin.com/in/oluwoleisrael"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </p>
        </div>

        <div
          ref={refs.facebook}
          data-id="facebook"
          className={`Facebook ${visible["facebook"] ? "slide-in" : ""}`}
        >
          <i
            className="devicon-facebook-plain colored"
            style={{ fontSize: "1.5rem", color: "rgba(24, 133, 206, 0.97)" }}
          ></i>
          <p>
            <a
              href="https://www.facebook.com/Oluwoleisraeldev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
