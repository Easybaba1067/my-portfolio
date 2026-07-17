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
        <h1 ref={pageTitle} className="big-heading highlight">
          Welcome to The Easyb Studio
        </h1>
        <div ref={pageText} className="header-text">
          <p>
            <strong>
              We Don't Just Build Software—We Solve Business Problems{". "}
            </strong>
            At The Easyb Studio, we help startups, entrepreneurs, and businesses
            overcome digital challenges with high-performing websites, web
            applications, mobile apps, and custom software built to grow your
            business and achieve real results.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainView;
