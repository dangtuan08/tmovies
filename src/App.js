import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./Grid.scss";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";
import ModalVideo from "./components/modal-video/ModalVideo";
import ButtonToTop from "./components/to-top/ButtonToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrap">
        <Header />
        <Routes />
        <ButtonToTop />
        <Footer />
        <ModalVideo />
      </div>
    </BrowserRouter>
  );
}

export default App;
