import styled from "styled-components";

export const ResultsPageWrapper = styled.div`
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin: 40px auto;
  max-width: 600px;
`;

export const UserId = styled.p`
  text-align: center;
  font-size: 14px;
  color: #999;
  margin: 20px 0;
  font-family: monospace;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;
