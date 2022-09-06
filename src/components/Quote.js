import "../styles/components/_quotes.scss";

const Quote = () => {
  return (
    <div className="quote">
      <h1 data-content="PASSIONATE">PASSIONATE</h1>
      <h1 data-content="ABOUT" className="quote__white">
        ABOUT
      </h1>
      <h1 data-content="EVERY">EVERY</h1>
      <h1 data-content="PIXEL" className="quote__white">
        PIXEL
      </h1>
      <span className="quote__pixelSpan"></span>
    </div>
  );
};

export default Quote;
