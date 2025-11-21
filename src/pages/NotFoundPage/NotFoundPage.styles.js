import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
`;

export const ErrorCode = styled.h1`
  font-size: 120px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const ErrorMessage = styled.h2`
  font-size: 32px;
  color: white;
  margin-bottom: 16px;
`;

export const ErrorDescription = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  max-width: 500px;
`;
