import "../css-files/spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="orbit-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Spinner;
