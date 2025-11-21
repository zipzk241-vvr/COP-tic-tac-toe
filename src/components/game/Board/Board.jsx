import Cell from "../Cell/Cell";
import "./Board.css";

function Board({ cells, onCellClick, winningLine }) {
  return (
    <div className="board">
      {cells.map((value, index) => (
        <Cell
          key={index}
          value={value}
          index={index}
          onClick={onCellClick}
          isWinning={winningLine?.includes(index)}
        />
      ))}
    </div>
  );
}

export default Board;
