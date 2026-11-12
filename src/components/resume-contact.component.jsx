import { useEffect, useRef, useState } from "react";

const ResumeContact = () => {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
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

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        "Something went wrong. Please try again or reach me directly at theeasybstudio@gmail.com.",
      );
    } finally {
      setSubmitting(false);
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
                style={{
                  fontSize: "2rem",
                  padding: "10px",
                  color: "var(--brand-500)",
                }}
              ></i>
            </h1>
            <div>
              {submitted ? (
                <div className="contact-success" role="status">
                  <i
                    className="bi bi-check-circle-fill"
                    style={{ fontSize: "2rem", color: "var(--brand-500)" }}
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
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="Name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="number">Phone</label>
                    <input
                      id="number"
                      type="tel"
                      name="number"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  {error && (
                    <p className="contact-error" role="alert">
                      {error}
                    </p>
                  )}
                  <button className="Btn" type="submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Submit"}
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
