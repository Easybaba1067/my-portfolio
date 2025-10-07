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
                <i className="bi bi-filetype-html" style={myStyle}></i>
                HTML
              </li>
              <li>
                <i className="bi bi-filetype-css" style={myStyle}></i>
                CSS
              </li>
              <li>
                <i className="bi bi-filetype-js" style={myStyle}></i>
                javascript
              </li>
              <li>
                <i className="bi bi-bootstrap" style={myStyle}></i>
                Bootsrap
              </li>
              <li>
                <i className="bi bi-filetype-js" style={myStyle}></i>
                React js
              </li>
              <li>
                <i className="bi bi-git" style={myStyle}></i>
                Git and Version control
              </li>
            </ul>
          </div>
          <div className="sec-content">
            <h1>Back-End development</h1>

            <ul>
              <li>
                <i className="bi bi-filetype-js" style={myStyle}></i>
                Nodejs
              </li>
              <li>
                <i className="bi bi-filetype-js" style={myStyle}></i>
                Expressjs
              </li>
              <li>
                <i className="bi bi-filetype-py" style={myStyle}></i>
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
                <i className="bi bi-filetype-sql" style={myStyle}></i>
                SQL
              </li>
              <li>
                <i className="bi bi-database" style={myStyle}></i>
                MongoDB
              </li>
              <li>
                <i className="bi bi-database-fill" style={myStyle}></i>
                Mongoose
              </li>
            </ul>
          </div>
          <div className="sec-content">
            <h1>Mobile development</h1>
            <ul>
              <li>
                <i className="bi bi-filetype-sql" style={myStyle}></i>
                Flutter
              </li>
              <li>
                <i className="bi bi-database" style={myStyle}></i>
                Dart
              </li>
              <li>
                <i className="bi bi-database-fill" style={myStyle}></i>
                Firebase
              </li>
              <li>
                <i className="bi bi-database-fill" style={myStyle}></i>
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
