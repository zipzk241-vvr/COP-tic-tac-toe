import styled from "styled-components";

export const GamePageWrapper = styled.div`
  position: relative;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  max-width: 700px;
`;

export const SettingsButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  padding: 0;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: rotate(90deg) scale(1.1);
    background: #764ba2;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #667eea;
  margin-bottom: 10px;
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
