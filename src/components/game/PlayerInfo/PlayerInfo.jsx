function PlayerInfo({ player, name, isActive }) {
  return (
    <div className={`player-info ${isActive ? "player-info--active" : ""}`}>
      <div className="player-info__symbol">{player}</div>
      <div className="player-info__name">{name}</div>
      <div className="player-info__label">
        {isActive ? "Ваш хід" : "Очікування"}
      </div>
    </div>
  );
}

export default PlayerInfo;
