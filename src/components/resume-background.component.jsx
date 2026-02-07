import ResumeAbout from "../components/resume-about.component";
import Career from "../components/resume-career.component";
import Profession from "../components/resume-profession.component";
import ResumeContact from "./resume-contact.component";
import { useState } from "react";
const Background = () => {
  const [isActive, setIsActive] = useState(false);
  const changeBackground = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={isActive ? "background active" : "background"}>
        <ResumeAbout />
        <Career isActive={isActive} changeBackground={changeBackground} />
        <Profession />

        <ResumeContact />
      </div>
    </>
  );
};
export default Background;
