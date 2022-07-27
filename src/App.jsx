import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import PageNotFound from "./components/PageNotFound";
import GlobalStyles from "./globalStyles";

function App() {
  // console theme
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Footer/>} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
