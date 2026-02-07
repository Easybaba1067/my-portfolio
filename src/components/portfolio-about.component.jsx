const About = ({ color, button, scrollInto, head }) => {
  return (
    <>
      <section className="about">
        <h1 className="about-h1">{head}</h1>
        <div className={color}>
          <p>
            We are a MERN Full-stack and Cross platform mobile application
            development company with great record of delivered projects, we
            possess a strong technologies in front-end design, back-end
            development, Authentication implemention and database integration,
            allowing us to effectively design and develop scalable,
            user-friendly and efficient web apps and mobile applications.
          </p>
        </div>
        <div className=" about">
          <h1 className="about-h1">Vision and MIssion</h1>
          <div className="mission">
            <p>
              Our goal is to turn your Applications idea into a reality, and
              we're committed to providing exceptional service and support
              throughout the development process. Our passion for innovation and
              commitment to excellent drive me to stay up-to-date with industry
              trends and best practices, we have worked on so many projects and
              delivered a good design and responsive apps.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
