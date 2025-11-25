const Profession = () => {
  const myStyle = {
    fontSize: "1.5rem",
    padding: "10px",
    color: "darkgoldenrod",
  };
  return (
    <>
      <section className="profession">
        <div className="headings">
          <h1>
            Personal summary
            <i className="bi bi-person-standing" style={myStyle}></i>
            <div className="line"></div>
          </h1>
        </div>
        <div className="profession-wrap">
          <div className="Skills seperate">
            <h2>
              Skills
              <i className="bi bi-collection" style={myStyle}></i>
            </h2>
            <ul>
              <li>
                <i className="devicon-html5-plain colored" style={myStyle}></i>
                HTML
              </li>
              <li>
                <i className="devicon-css3-plain colored" style={myStyle}></i>
                CSS
              </li>
              <li>
                <i
                  className="devicon-javascript-plain colored"
                  style={myStyle}
                ></i>
                JavaScript
              </li>

              <li>
                <i
                  className="devicon-flutter-plain colored"
                  style={myStyle}
                ></i>
                Flutter and Dart
              </li>
              <li>
                <i className="devicon-react-plain colored" style={myStyle}></i>
                React js
              </li>
              <li>
                <i
                  className="devicon-mongodb-plain colored"
                  style={myStyle}
                ></i>
                MongoDB
              </li>
              <li>
                <i className="devicon-nodejs-plain colored" style={myStyle}></i>
                NodeJs
              </li>
              <li>
                <i className="devicon-github-plain colored" style={myStyle}></i>
                Git
              </li>
            </ul>
          </div>
          <div className="education seperate">
            <h2>
              Educations
              <i className="bi bi-book" style={myStyle}></i>
            </h2>
            <ul>
              <li>
                <i className="bi bi-star-half" style={myStyle}></i>
                B.sc Entrepreneurship, Ekiti state University
              </li>
              <li>
                <i className="bi bi-star-half" style={myStyle}></i>
                Udemy basic to advance front-end development
              </li>
              <li>
                <i className="bi bi-star-half" style={myStyle}></i>
                Udemy full-stack web development{" "}
              </li>
              <li>
                <i className="bi bi-star-half" style={myStyle}></i>
                Udemy Flutter App development
              </li>
              <li>
                <i className="bi bi-star-half" style={myStyle}></i>
                Zero to Mastery Python course
              </li>
              <li>
                <i className="bi bi-star-half" style={myStyle}></i>
                ecetera.
              </li>
            </ul>
          </div>

          <div className="hobby seperate">
            <h2>
              hobbys
              <i className="bi bi-person-arms-up" style={myStyle}></i>
            </h2>
            <ul>
              <li>
                <i className="bi bi-music-note" style={myStyle}></i>
                music
              </li>
              <li>
                <i className="bi bi-camera-reels" style={myStyle}></i>
                Movies
              </li>
            </ul>
          </div>
          <div className="language seperate">
            <h2>
              languages
              <i className="bi bi-ear" style={myStyle}></i>
            </h2>
            <ul>
              <li>English</li>
              <li>Yoruba</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profession;
