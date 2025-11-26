import { useNavigate } from "react-router";
import * as S from "./SettingsPage.styles";
import { useLocale } from "../../context/LocaleContext";
import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";
import {
  useSettings,
  useUpdatePlayerNames,
  useToggleSound,
  useToggleAnimations,
  useResetSettings,
} from "../../store";

function SettingsPage() {
  const navigate = useNavigate();
  const settings = useSettings();

  const updatePlayerNames = useUpdatePlayerNames();
  const toggleSound = useToggleSound();
  const toggleAnimations = useToggleAnimations();
  const resetSettings = useResetSettings();

  const { locale, changeLocale } = useLocale();

  const handlePlayerXChange = (e) => {
    updatePlayerNames(e.target.value, settings.playerOName);
  };

  const handlePlayerOChange = (e) => {
    updatePlayerNames(settings.playerXName, e.target.value);
  };

  return (
    <Container>
      {" "}
      <S.SettingsContainer>
        <S.Title>Налаштування</S.Title>

        <S.Section>
          <S.SectionTitle>Імена гравців</S.SectionTitle>

          <S.InputGroup>
            <S.Label>Ім'я гравця X:</S.Label>
            <S.Input
              type="text"
              value={settings.playerXName}
              onChange={handlePlayerXChange}
              placeholder="Гравець X"
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Ім'я гравця O:</S.Label>
            <S.Input
              type="text"
              value={settings.playerOName}
              onChange={handlePlayerOChange}
              placeholder="Гравець O"
            />
          </S.InputGroup>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Інтерфейс</S.SectionTitle>
          <S.CheckboxGroup>
            <S.CheckboxLabel>
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={toggleSound}
              />
              Звукові ефекти
            </S.CheckboxLabel>
            <S.CheckboxLabel>
              <input
                type="checkbox"
                checked={settings.animationsEnabled}
                onChange={toggleAnimations}
              />
              Анімації
            </S.CheckboxLabel>
          </S.CheckboxGroup>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Мова інтерфейсу</S.SectionTitle>
          <S.Select
            value={locale}
            onChange={(e) => changeLocale(e.target.value)}
          >
            <option value="uk">Українська</option>
            <option value="en">English</option>
          </S.Select>
        </S.Section>

        <S.Actions>
          <Button onClick={() => navigate("/")} variant="primary">
            На головну
          </Button>
          <Button onClick={() => navigate("/statistics")} variant="secondary">
            Статистика
          </Button>
          <S.ResetButton onClick={resetSettings}>
            Скинути налаштування
          </S.ResetButton>
        </S.Actions>
      </S.SettingsContainer>
    </Container>
  );
}

export default SettingsPage;
