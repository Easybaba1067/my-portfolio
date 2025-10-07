const About = ({ color, button, scrollInto, head }) => {
  return (
    <>
      <section className="about">
        <h1 className="about-h1">{head}</h1>
        <div className={color}>
          <p>
            We are a MERN Full-stack and Cross platform mobile application
            development company with four years project based expirence, we
            possess a strong technologies in front-end design, back-end
            development, Authentication implemention and database integration,
            allowing us to effectively design and develop scalable,
            user-friendly and efficient web apps and mobile applications. Our
            passion for innovation and commitment to excellent drive me to stay
            up-to-date with industry trends and best practices, we are
            confidence with our skilss and proud of our projects and expirence
            and it makes us strong, we have worked on so many projects and
            delivered a good design and responsive apps.
          </p>
          <button onClick={scrollInto} className={button}>
            Contact
          </button>
        </div>
      </section>
    </>
  );
};
export default About;
