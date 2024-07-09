import "./components/Assests/index.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Rover from "./pages/marsRover/Rover";
import Satellite from "./pages/satellite/Satellite";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  console.log(currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="rovers"
              element={
                <RequireAuth>
                  <Rover />
                </RequireAuth>
              }
            />
            <Route
              path="sattellites"
              element={
                <RequireAuth>
                  <Satellite />
                </RequireAuth>
              }
            />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
