const Expirence = () => {
  const myStyle = {
    fontSize: "2rem",
    padding: "5px",
    color: "aqua",
  };
  return (
    <>
      <section className="expirence-section">
        <h1 className="skills-h1">Our skills and Services </h1>
        <div className="content">
          <div className="sec-content">
            <h1>Front-End development</h1>

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
                {" "}
                <i
                  className="devicon-javascript-plain colored"
                  style={myStyle}
                ></i>
                javascript
              </li>
              <li>
                <i
                  className="devicon-bootstrap-plain colored"
                  style={myStyle}
                ></i>
                Bootsrap
              </li>
              <li>
                <i className="devicon-figma-plain colored" style={myStyle}></i>
                Figma
              </li>
              <li>
                <i className="devicon-react-plain colored" style={myStyle}></i>
                React js
              </li>
              <li>
                <i className="devicon-git-plain colored" style={myStyle}></i>
                Git and Version control
              </li>
            </ul>
          </div>
          <div className="sec-content">
            <h1>Back-End development</h1>

            <ul>
              <li>
                <i className="devicon-nodejs-plain colored" style={myStyle}></i>
                Nodejs
              </li>
              <li>
                <i
                  className="devicon-express-original colored"
                  style={myStyle}
                ></i>
                Expressjs
              </li>
              <li>
                <i className="devicon-python-plain colored" style={myStyle}></i>
                Python
              </li>

              <li>
                <i className="bi bi-router" style={myStyle}></i>
                RESTful APIs
              </li>
            </ul>
          </div>
          <div className="sec-content">
            <h1>Database development</h1>

            <ul>
              <li>
                <i className="devicon-mysql-plain colored" style={myStyle}></i>
                SQL
              </li>
              <li>
                <i
                  className="devicon-mongodb-plain colored"
                  style={myStyle}
                ></i>
                MongoDB
              </li>
              <li>
                <i
                  className="devicon-mongoose-original colored"
                  style={myStyle}
                ></i>
                Mongoose
              </li>
            </ul>
          </div>
          <div className="sec-content">
            <h1>Mobile development</h1>
            <ul>
              <li>
                <i
                  className="devicon-flutter-plain colored"
                  style={myStyle}
                ></i>
                Flutter
              </li>
              <li>
                <i className="devicon-dart-plain colored" style={myStyle}></i>
                Dart
              </li>
              <li>
                <i
                  className="devicon-firebase-plain colored"
                  style={myStyle}
                ></i>
                Firebase
              </li>
              <li>
                <i className="bi bi-door-open" style={myStyle}></i>
                Authentication
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Expirence;
