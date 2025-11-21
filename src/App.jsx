import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
