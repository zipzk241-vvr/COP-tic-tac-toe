import styled from "styled-components";

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
    box-shadow: 0 6px 20px rgba(118, 75, 162, 0.4);
  }
`;

export const StatsContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  text-align: center;
  color: #667eea;
  margin-bottom: 40px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

export const StatCard = styled.div`
  background: ${(props) => {
    if (props.$highlight === "X")
      return "linear-gradient(135deg, #FF6B6B, #FF8E8E)";
    if (props.$highlight === "O")
      return "linear-gradient(135deg, #4ECDC4, #70D9D0)";
    return "linear-gradient(135deg, #667eea, #764ba2)";
  }};
  color: white;
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;


export const StatNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StatLabel = styled.div`
  font-size: 16px;
  opacity: 0.9;
`;

export const StatPercentage = styled.div`
  font-size: 14px;
  margin-top: 8px;
  opacity: 0.8;
`;

export const Section = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  color: #667eea;
  margin-bottom: 20px;
`;

export const RecordsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const RecordItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #f5f7fa;
  border-radius: 8px;

  span {
    color: #666;
  }

  strong {
    color: #333;
  }
`;

export const HistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #f5f7fa;
    font-weight: 600;
    color: #667eea;
  }

  tr:hover {
    background: #f9f9f9;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #999;
  font-size: 18px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const ResetButton = styled.button`
  padding: 12px 24px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #c82333;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(220, 53, 69, 0.3);
  }
`;

export const ClearButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #ffa500;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #ff8c00;
  }
`;
