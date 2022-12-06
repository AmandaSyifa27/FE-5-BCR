import React from "react"
import LandingPage from "./Pages/LandingPage";
import SearchPage from "./Pages/SearchPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CarResult from "./Pages/CarResult";
import DetailCar from "./Pages/DetailCar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/result" element={<CarResult/>} />
          <Route path="/detail/:carId" element={<DetailCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;