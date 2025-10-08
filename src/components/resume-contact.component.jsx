const ResumeContact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact">
          <div className="contact-info">
            <h1>
              Contact
              <i
                className="bi bi-phone"
                style={{ fontSize: "2rem", padding: "10px", color: "#ffff" }}
              ></i>
            </h1>
            <div>
              <form name="contact" netlify>
                <div>
                  <label for="name">FULL NAME</label>
                  <input type="name" name="Name" placeholder="Name" />
                  <br />
                </div>
                <div>
                  <label for="phone number">PHONE</label>
                  <input
                    type="phone number"
                    name="number"
                    placeholder="Phone number"
                  />
                  <br />
                </div>
                <div>
                  <label for="email">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                </div>
                <br />
                <label for="message">MESSAGE</label>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <br />
                <button className="Btn" type="submit">
                  send
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
