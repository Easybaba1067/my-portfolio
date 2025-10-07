const Testimony = ({ testimony, handleTouchStart, handleTouchEnd }) => {
  const { image, small, text } = testimony;
  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="testimony"
      >
        <div className="testimony-image">
          <img src={image} alt={small} />
          <br />
          <small>{small} </small>
        </div>
        <p>
          <i
            className="bi bi-chat-quote"
            style={{ fontSize: "3rem", margin: "2rem" }}
          ></i>
          <br />
          {text}
        </p>
      </div>
    </>
  );
};
export default Testimony;
