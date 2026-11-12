import "../css-files/resume.css";

const ResumeView = () => {
  return (
    <div className="resume-view">
      <div className="introduction">
        <div className="profile-pic">
          <img src="/profile-image.jpeg" alt="profile" />
        </div>
        <div>
          <h1>
            i'm <span className="highlight">Oluwole Israel</span>
          </h1>
          <h2>MERN Full-Stack web developer</h2>
          <h2>Mobile application developer</h2>
        </div>
      </div>
      <div className="qoute">
        <div className="qoute-text">
          <h2 className="highlight">You can count on me</h2>
          <p>
            <i className="bi bi-quote highlight"></i> "As an expert" i blends
            innovation and technology. With expertise in MERN-STACK, HTML and
            CSS, Dart & Flutter, i craft web and mobile applications,and delve
            into the realm of machine learning. Driven by passion, powered by
            code.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResumeView;
