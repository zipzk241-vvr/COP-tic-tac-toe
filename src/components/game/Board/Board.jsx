import Cell from "../Cell/Cell";

function Board({ cells, onCellClick }) {
  return (
    <div className="board">
      {cells.map((value, index) => (
        <Cell key={index} value={value} index={index} onClick={onCellClick} />
      ))}
    </div>
  );
}

export default Board;
