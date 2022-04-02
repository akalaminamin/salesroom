import React, { Suspense, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HOME_ROUTE,
  SIGNUP_ROUTE,
  GETSTARTED_ROUTE,
  DASHBOARD_ROUTE,
} from "./constants";

const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
const Dashboard = lazy(() => import("./Dashboard/Index"));
const MyProducts = lazy(() => import("./Dashboard/MyProducts/MyProducts"));
function App() {
  const [provideEmail, setProvideEmail] = useState(false);
  const [loginWith, setloginWith] = useState(false);

  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="h-screen flex justify-center items-center">
              <img
                src={require("./Assets/images/icon/spinner.gif")}
                className="h-40"
              />
            </div>
          }
        >
          <Routes>
            <Route
              path={HOME_ROUTE}
              element={
                <Login
                  setloginWith={setloginWith}
                  setProvideEmail={setProvideEmail}
                />
              }
            />
            <Route
              path={GETSTARTED_ROUTE}
              element={<Signup provideEmail={provideEmail} />}
            />
            <Route path={SIGNUP_ROUTE} element={<Signup />} />
            <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
