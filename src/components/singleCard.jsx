import "./singleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = (card) => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={() => handleClick(card)}
          alt="card back"
        />
      </div>
    </div>
  );
};
export default SingleCard;
