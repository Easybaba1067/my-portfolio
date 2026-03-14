import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from ".././easybaba icon.png";
import Spinner from "./loading-model";
import "../css-files/navbar.css";
import MobileNav from "./navbar";
const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
              <h4>The EasyB Studio</h4>
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
