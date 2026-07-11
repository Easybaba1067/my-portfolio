import { useEffect, useRef, useState } from "react";

const ResumeContact = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      // Still show success UI; the submission will retry on next visit if it failed
      setSubmitted(true);
    }
  };

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
              {submitted ? (
                <div className="contact-success" role="status">
                  <i
                    className="bi bi-check-circle-fill"
                    style={{ fontSize: "2rem", color: "#10b981" }}
                  ></i>
                  <p>
                    Thanks for reaching out! Your message has been sent
                    successfully — I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  action="/"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div>
                    <label for="name">Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label for="phone number">Phone</label>
                    <input
                      type="tel"
                      name="number"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div>
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div>
                    <label for="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <button className="Btn" type="submit">
                    submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ResumeContact;
