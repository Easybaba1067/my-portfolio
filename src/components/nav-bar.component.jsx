import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from ".././easybaba icon.png";
import Spinner from "./loading-model";
import "../css-files/navbar.css";
import MobileNav from "./navbar";
const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBlack, setIsBlack] = useState(false);
  const changeBackground = () => {
    setIsBlack(!isBlack);
    if (!isBlack) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  };

  const navigator = () => {
    setActiveNav(!activeNav);
  };
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setActiveNav(false);
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (activeNav || isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [activeNav, isLoading]);

  const careerStyle = {
    fontSize: "0.8rem",
    padding: "10px",
    color: "rgba(24, 133, 206, 0.97)",
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="nav-bar">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <h4>The EasyB Studios</h4>
              <div onClick={navigator}>
                {activeNav ? (
                  <i className="bi bi-x-lg" style={{ fontSize: "1.5rem" }}></i>
                ) : (
                  <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
                )}
              </div>
            </div>

            <div className="nav">
              <ul className="nav-list">
                <div
                  onClick={changeBackground}
                  className={isBlack ? "theme active" : "theme"}
                >
                  <i className="mode1 bi bi-sun" style={careerStyle}></i>

                  <i className="mode2 bi bi-moon" style={careerStyle}></i>
                </div>
                <Link className="nav-link" to="/">
                  Easyb
                </Link>

                <Link className="nav-link" to="resume">
                  Our Expert
                </Link>

                <Link className="nav-link" to="projects">
                  Projects
                </Link>
              </ul>
            </div>
          </div>
          <MobileNav isActive={activeNav} />

          {activeNav && <div className="nav-overlay" onClick={navigator}></div>}
        </div>
      )}

      <Outlet />

      <footer className="footer">
        All reserved @copyright The Easyb Studio {currentYear}
      </footer>
    </>
  );
};

export default NavBar;
