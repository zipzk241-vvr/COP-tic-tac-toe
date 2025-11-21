function Cell({ value, onClick, index, isWinning }) {
  return (
    <div
      className={`cell ${isWinning ? "cell--winning" : ""}`}
      onClick={() => onClick(index)}
    >
      <span className={`cell__value cell__value--${value}`}>{value || ""}</span>
    </div>
  );
}

export default Cell;
