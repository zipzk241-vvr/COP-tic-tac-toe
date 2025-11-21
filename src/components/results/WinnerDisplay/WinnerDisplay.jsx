function WinnerDisplay({ winner, isDraw }) {
  return (
    <div className="winner-display">
      {isDraw ? (
        <h2>Нічия!</h2>
      ) : (
        <>
          <h2>Переможець:</h2>
          <div
            className={`winner-display__symbol winner-display__symbol--${winner}`}
          >
            {winner}
          </div>
        </>
      )}
    </div>
  );
}

export default WinnerDisplay;
