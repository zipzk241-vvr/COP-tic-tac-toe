import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { LocaleProvider } from "./context/LocaleContext";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <GlobalStyles />
        <AppRoutes />
      </LocaleProvider>
    </BrowserRouter>
  );
}

export default App;
