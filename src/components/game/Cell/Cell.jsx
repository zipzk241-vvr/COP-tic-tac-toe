function Cell({ value, onClick, index }) {
  return (
    <div className="cell" onClick={() => onClick(index)}>
      <span className={`cell__value cell__value--${value}`}>{value || ""}</span>
    </div>
  );
}

export default Cell;
