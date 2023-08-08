import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";
import GamePage from "./pages/game-page/GamePage";
import OrderPage from "./pages/order-page/OrderPage";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/order" element={<OrderPage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
