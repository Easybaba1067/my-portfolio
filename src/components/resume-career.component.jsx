const Career = ({ isActive, changeBackground }) => {
  const careerStyle = {
    fontSize: "1.4rem",
    padding: "10px",
    color: "rgba(24, 133, 206, 0.97)",
  };
  return (
    <>
      <section className="career">
        <div className="career-wrap">
          <h1>
            what i do <i className="bi bi-briefcase" style={careerStyle}></i>
            <div className="line"></div>
          </h1>
          <div
            onClick={changeBackground}
            className={isActive ? "theme active" : "theme"}
          >
            <i className="mode1 bi bi-sun" style={careerStyle}></i>
            <i className="mode2 bi bi-moon" style={careerStyle}></i>
          </div>
        </div>
        <div className="career-summary">
          <div className="career-info">
            <div className="career-flex">
              <h2>Web development</h2>
            </div>

            <div>
              <p>
                As a web developer, i build and maintain websites and web apps
                using HTML, CSS, and JavaScript, React, etc for font-end and
                uses nodejs, express.js, EJS, MongoDB, passport.js, Firebase
                cloud and firebase auth for back-end. You ensure sites are
                user-friendly, visually appealing, and responsive. You work with
                designers and clients to create functional and accessible
                digital experiences.
              </p>
            </div>
          </div>
          <div className="career-info">
            <div className="career-flex">
              <h2>UI/UX designing</h2>
            </div>
            <div>
              <p>
                As a UI/UX designer, i design user-friendly interfaces and
                enhance user experiences. i conduct research, create wireframes,
                and develop prototypes to ensure intuitive and visually
                appealing designs. My goal is to make digital interactions
                seamless and enjoyable for users.
              </p>
            </div>
          </div>
          <div className="career-info">
            <div className="career-flex">
              <h2> Mobile App development</h2>
            </div>
            <div>
              <p>
                I design and build mobile applications for iOS and Android
                platforms. I code, test, and debug apps to ensure they are
                functional and user-friendly. I also collaborate with designers
                and clients to bring their app ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Career;
