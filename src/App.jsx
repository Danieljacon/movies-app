import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import GlobalStyles from "./globalStyles";

function App() {
  // console theme
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <div className="Wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
