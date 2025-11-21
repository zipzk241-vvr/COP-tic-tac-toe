import { useNavigate } from "react-router";
import * as S from "./NotFoundPage.styles";
import Button from "../../components/common/Button/Button";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <S.NotFoundWrapper>
      <S.ErrorCode>404</S.ErrorCode>
      <S.ErrorMessage>Сторінку не знайдено!</S.ErrorMessage>
      <S.ErrorDescription>
        На жаль, сторінка, яку ви шукаєте, не існує.
      </S.ErrorDescription>
      <Button onClick={() => navigate("/")} variant="primary">
        Повернутися на головну
      </Button>
    </S.NotFoundWrapper>
  );
}

export default NotFoundPage;
