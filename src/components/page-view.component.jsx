import "../css-files/page-view.css";
import { useEffect, useRef } from "react";
const MainView = () => {
  const pageTitle = useRef(null);
  useEffect(() => {
    if (pageTitle.current) pageTitle.current.classList.add("active");
  }, []);

  const pageText = useRef(null);
  useEffect(() => {
    if (pageText.current) pageText.current.classList.add("active");
  }, []);
  return (
    <>
      <div className="main-view">
        <div className="page-overlay"></div>
        <h1 ref={pageTitle} className="big-heading highlight">
          Welcome to The Easyb Studio
        </h1>
        <div ref={pageText} className="header-text">
          <p>
            "Welcome to The Easyb Studio, your premier destination for expert
            Software development solutions. As a Software Company with skilled
            developers, and passion for innovation and creativity, we specialize
            in crafting bespoke digital experiences that drive real results.
            With a keen eye for detail and a commitment to excellence, we bring
            your vision to life through responsive, user-friendly, and visually
            stunning Software applications.
            <span>
              Whether you're looking to establish a strong online presence,
              enhance your existing website, or leverage the latest Software
              technologies to boost your business, you are at the right place,
              we are here to help. Follow our journey, explore our portfolio,
              and discover how The Easyb Studio can help you achieve your
              digital goals."
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainView;
