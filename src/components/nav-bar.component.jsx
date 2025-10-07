import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from ".././easybaba icon.png";
import "../css-files/navbar.css";
const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);

  const navigator = () => {
    setActiveNav(!activeNav);
  };

  const location = useLocation();

  useEffect(() => {
    setActiveNav(false);
  }, [location]);

  useEffect(() => {
    if (activeNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Optional cleanup in case component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [activeNav]);

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <h5>The EasyB Studio</h5>
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
              Home
            </Link>

            <Link className="nav-link" to="resume">
              Resume
            </Link>

            <Link className="nav-link" to="projects">
              Projects
            </Link>
          </ul>
        </div>
      </div>

      <div className={`mobile-navbar ${activeNav ? "" : "hidden"}`}>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link className="mobile-nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="mobile-nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li>
              <Link className="mobile-nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default NavBar;
