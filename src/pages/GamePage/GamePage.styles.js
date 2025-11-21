import styled from "styled-components";

export const GamePageWrapper = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  max-width: 700px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #667eea;
  margin-bottom: 10px;
`;

export const UserId = styled.p`
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
  font-family: monospace;
`;

export const PlayersInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const GameInfo = styled.div`
  text-align: center;
  margin: 20px 0;
  font-size: 18px;
`;

export const GameResult = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #4caf50;
  margin-top: 16px;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;
