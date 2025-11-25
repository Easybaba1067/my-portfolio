import "../css-files/resume.css";

const ResumeView = () => {
  return (
    <div className="resume-view">
      <div className="resume-overlay"></div>
      <nav className="page-name">
        <h1 className="name">
          <span className="highlight">Oluwole</span> Israel
        </h1>
        <div className="resume">
          <h1>
            <span className="highlight">My</span> Resume
          </h1>
        </div>
      </nav>
      <div className="introduction">
        <div className="profile-pic">
          <img src="/IMG-20221106-WA0001.jpg" alt="profile" />
        </div>
        <h1>i'm Oluwole Israel</h1>
        <h2>MERN Full-Stack website developer</h2>
        <h2>Mobile application developer</h2>
        <div className="downloadBtn">
          <ul>
            <li>
              <a href="/Oluwole Isreal Olasunkanmi.pdf" download="oluwole cv">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="qoute">
        <div className="qoute-text">
          <h2 className="highlight">You can count on me</h2>
          <p>
            <i className="bi bi-quote highlight"></i> "The Easyb Studio" blends
            innovation and technology. With expertise in Python, JavaScript,
            HTML, Dart & Flutter and CSS, i craft web and mobile
            applications,and delve into the realm of machine learning. Driven by
            passion, powered by code.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ResumeView;
