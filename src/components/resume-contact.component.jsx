import { useEffect, useRef, useState } from "react";

const ResumeContact = () => {
  const [visible, setVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  });
  return (
    <>
      <section id="contact">
        <div
          ref={contactRef}
          className={`contact ${visible ? "slide-in" : ""}`}
        >
          <div className="contact-info">
            <h1>
              Contact
              <i
                className="bi bi-phone"
                style={{ fontSize: "2rem", padding: "10px", color: "#ffff" }}
              ></i>
            </h1>
            <div>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label for="name">Name</label>
                  <input type="name" name="Name" placeholder="Name" />
                  <br />
                </div>
                <div>
                  <label for="phone number">Phone</label>
                  <input
                    type="phone number"
                    name="number"
                    placeholder="Phone number"
                  />
                  <br />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                </div>
                <br />
                <label for="message">Message</label>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <br />
                <button className="Btn" type="submit">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ResumeContact;
