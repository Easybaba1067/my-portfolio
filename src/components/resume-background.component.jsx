import ResumeAbout from "../components/resume-about.component";
import Career from "../components/resume-career.component";
import Profession from "../components/resume-profession.component";
import ResumeContact from "./resume-contact.component";

const Background = () => {
  return (
    <>
      <div className="background">
        <ResumeAbout />
        <Career />
        <Profession />

        <ResumeContact />
      </div>
    </>
  );
};
export default Background;
