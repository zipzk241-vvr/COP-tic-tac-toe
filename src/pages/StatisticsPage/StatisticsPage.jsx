import { useNavigate } from "react-router";
import * as S from "./StatisticsPage.styles";
import Button from "../../components/common/Button/Button";

import {
  useStatistics,
  useResetStatistics,
  useClearHistory,
} from "../../store";

function StatisticsPage() {
  const navigate = useNavigate();
  const stats = useStatistics();
  const resetStatistics = useResetStatistics();
  const clearHistory = useClearHistory();

  const handleResetStats = () => {
    if (window.confirm("Ви впевнені? Вся статистика буде втрачена.")) {
      resetStatistics();
    }
  };

  return (
    <S.StatsContainer>
      <S.SettingsButton onClick={() => navigate("/settings")}>
        ⚙️
      </S.SettingsButton>

      <S.Title>Статистика ігор</S.Title>

      <S.StatsGrid>
        <S.StatCard>
          <S.StatNumber>{stats.gamesPlayed}</S.StatNumber>
          <S.StatLabel>Зіграно ігор</S.StatLabel>
        </S.StatCard>
        <S.StatCard $highlight="X">
          <S.StatNumber>{stats.wins.X}</S.StatNumber>
          <S.StatLabel>Перемог X</S.StatLabel>
          <S.StatPercentage>{stats.winRate.X}%</S.StatPercentage>
        </S.StatCard>

        <S.StatCard $highlight="O">
          <S.StatNumber>{stats.wins.O}</S.StatNumber>
          <S.StatLabel>Перемог O</S.StatLabel>
          <S.StatPercentage>{stats.winRate.O}%</S.StatPercentage>
        </S.StatCard>

        <S.StatCard>
          <S.StatNumber>{stats.draws}</S.StatNumber>
          <S.StatLabel>Нічиї</S.StatLabel>
        </S.StatCard>
      </S.StatsGrid>

      <S.Section>
        <S.SectionTitle> Рекорди</S.SectionTitle>
        <S.RecordsList>
          <S.RecordItem>
            <span> Найшвидша перемога:</span>
            <strong>{stats.fastestWin || "—"} ходів</strong>
          </S.RecordItem>
          <S.RecordItem>
            <span> Найдовша гра:</span>
            <strong>{stats.longestGame || "—"} ходів</strong>
          </S.RecordItem>
          <S.RecordItem>
            <span> Середня кількість ходів:</span>
            <strong>{stats.averageMovesPerGame || "—"}</strong>
          </S.RecordItem>
          <S.RecordItem>
            <span>Поточна серія:</span>
            <strong>
              {stats.currentStreak.count > 0
                ? `${stats.currentStreak.player} — ${stats.currentStreak.count} ігор`
                : "Немає"}
            </strong>
          </S.RecordItem>
          <S.RecordItem>
            <span> Найкраща серія:</span>
            <strong>
              {stats.bestStreak.count > 0
                ? `${stats.bestStreak.player} — ${stats.bestStreak.count} ігор`
                : "Немає"}
            </strong>
          </S.RecordItem>
        </S.RecordsList>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Історія останніх ігор</S.SectionTitle>
        {stats.history.length === 0 ? (
          <S.EmptyState>Історія порожня. Зіграйте свою першу гру!</S.EmptyState>
        ) : (
          <>
            <S.HistoryTable>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Результат</th>
                  <th>Ходів</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                {stats.history.map((game, index) => (
                  <tr key={game.id}>
                    <td>{index + 1}</td>
                    <td>
                      {game.isDraw
                        ? "Нічия"
                        : `${game.winner === "X" ? "❌" : "⭕"} Переміг ${
                            game.winner
                          }`}
                    </td>
                    <td>{game.moves}</td>
                    <td>
                      {new Date(game.date).toLocaleString("uk-UA", {
                        day: "2-digit",
                        month: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </S.HistoryTable>

            <S.ClearButton onClick={clearHistory}>
              Очистити історію
            </S.ClearButton>
          </>
        )}
      </S.Section>

      <S.Actions>
        <Button onClick={() => navigate("/")} variant="primary">
          На головну
        </Button>
        <S.ResetButton onClick={handleResetStats}>
          Скинути всю статистику
        </S.ResetButton>
      </S.Actions>
    </S.StatsContainer>
  );
}

export default StatisticsPage;
