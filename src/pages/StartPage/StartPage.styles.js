import styled from "styled-components";

export const StartPageWrapper = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin: 40px auto;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #667eea;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const PlayersSetup = styled.div`
  margin: 30px 0;
`;

export const PlayerSetup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const RulesBox = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  text-align: left;

  h3 {
    margin-bottom: 12px;
    color: #667eea;
  }

  ul {
    margin-left: 20px;

    li {
      margin-bottom: 8px;
      color: #555;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;
