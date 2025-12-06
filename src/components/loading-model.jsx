import "../css-files/spinner.css";

const Spinner = () => {
  return (
    <>
      <div className="spinner-container">
        <div className="loading">
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
