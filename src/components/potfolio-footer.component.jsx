const Footer = ({ targetRef }) => {
  return (
    <>
      <footer ref={targetRef} className="portfolio-contact">
        <h1>let't work great things together</h1>
        <div className="contact-grid">
          <div className="mail">
            <i
              className="devicon-google-plain colored"
              style={{
                fontSize: "1.5rem",
                color: "rgba(24, 133, 206, 0.97)",
              }}
            ></i>
            <p>theeasybstudio@gmail.com</p>
          </div>
          <div className="number">
            <i
              className="bi bi-whatsapp"
              style={{
                fontSize: "1.5rem",
                color: "rgba(24, 133, 206, 0.97)",
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
          <div className="linkedin">
            <i
              className="devicon-linkedin-plain colored"
              style={{
                fontSize: "1.5rem",
                color: "rgba(24, 133, 206, 0.97)",
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
          <div className="Facebook">
            <i
              className="devicon-facebook-plain colored"
              style={{
                fontSize: "1.5rem",
                color: "rgba(24, 133, 206, 0.97)",
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
        </div>
      </footer>
    </>
  );
};
export default Footer;
