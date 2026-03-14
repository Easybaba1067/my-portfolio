import { Link } from "react-router-dom";
import "../css-files/navbar.css";

const MobileNav = ({ isActive }) => {
  return (
    <>
      <div className={`mobile-navbar ${isActive ? "active" : ""}`}>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link className="mobile-nav-link" to="/">
                Easyb
              </Link>
            </li>
            <li>
              <Link className="mobile-nav-link" to="/resume">
                Our expert
              </Link>
            </li>
            <li>
              <Link className="mobile-nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-footer">
          <div className="linkedin">
            <i
              className="devicon-linkedin-plain colored"
              style={{
                fontSize: "1.5rem",
                color: "#ffff",
              }}
            ></i>
            <p>
              <a
                href="https://www.linkedin.com/in/oluwoleisrael"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </p>
          </div>
          <div className="facebook">
            <i
              className="devicon-facebook-plain colored"
              style={{
                fontSize: "1.5rem",
                color: "#ffff",
              }}
            ></i>
            <p>
              <a
                href="https://www.facebook.com/Oluwoleisraeldev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>
          <div className="mail">
            <i
              className="devicon-google-plain colored"
              style={{
                fontSize: "1.5rem",
                color: "#ffff",
              }}
            ></i>
            <p>theeasybstudio@gmail.com</p>
          </div>
          <div className="number">
            <i
              className="bi bi-whatsapp"
              style={{
                fontSize: "1.5rem",
                color: "#ffff",
              }}
            ></i>
            <p>
              <a
                href="https://wa.me/234917190738"
                target="_blank"
                rel="noopener noreferrer"
              >
                +234-913-719-0738
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
