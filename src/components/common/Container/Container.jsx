import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
