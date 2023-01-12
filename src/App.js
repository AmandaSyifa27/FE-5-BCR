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
import NotFoundPage from "./Pages/NotFoundPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/sign-in" element={<SignIn />}/>
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/result" element={<CarResult/>} />
          <Route path="/detail/:carId" element={<DetailCar />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;