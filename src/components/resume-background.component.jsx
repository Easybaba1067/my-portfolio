import ResumeAbout from "../components/resume-about.component";
import Career from "../components/resume-career.component";
import Profession from "../components/resume-profession.component";
import ResumeContact from "./resume-contact.component";
import ResumeCarousel from "./resume-carousel.component";
import { useState } from "react";
const Background = () => {
  const [isActive, setIsActive] = useState(false);
  const changeBackground = () => {
    setIsActive(!isActive);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={isActive ? "background active" : "background"}>
        <ResumeAbout />
        <Career isActive={isActive} changeBackground={changeBackground} />
        <Profession />
        <ResumeCarousel />
        <ResumeContact />
        <footer className="footer">
          All reserved @copyright The Easyb Studio {currentYear}
        </footer>
      </div>
    </>
  );
};
export default Background;
