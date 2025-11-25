const Footer = ({ targetRef }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer ref={targetRef} className="portfolio-contact">
        <div className="contact-form">
          <form name="portfolio-contact" netlify>
            <div>
              <input name="name" type="text" required />
              <label>Name</label>
            </div>
            <div>
              <input name="email" type="email" required />
              <label>Email</label>
            </div>
            <div>
              <textarea
                name="textarea"
                type="message"
                id="message"
                placeholder="drop your message"
                required
              ></textarea>
            </div>
            <div>
              <button className="send-btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>

        <h1>let't work great things together</h1>
        <div className="contact-grid">
          <div className="mail">
            <i
              className="devicon-google-plain colored"
              style={{ fontSize: "1.5rem", color: "aqua" }}
            ></i>
            <p>theeasybstudio@gmail.com</p>
          </div>
          <div className="number">
            <i
              className="bi bi-whatsapp"
              style={{ fontSize: "1.5rem", color: "aqua" }}
            ></i>
            <p>+234-913-719-0738</p>
          </div>
          <div className="linkedin">
            <i
              className="devicon-linkedin-plain colored"
              style={{ fontSize: "1.5rem", color: "aqua" }}
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
              style={{ fontSize: "1.5rem", color: "aqua" }}
            ></i>
            <p>
              <a
                href="https://www.facebook.com/TheEasybStudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </p>
          </div>
        </div>
        <div className="copyright">
          @copyright The Easyb Studio {currentYear}
        </div>
      </footer>
    </>
  );
};
export default Footer;
