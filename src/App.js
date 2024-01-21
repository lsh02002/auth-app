import { useLayoutEffect, useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import LoginError from "./Login/LoginError";
import Logout from "./Login/Logout";
import MyPage from "./MyPage/MyPage";
import Signup from "./Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isToken, setIsToken] = useState(false);
  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  // 로그인 되었을 때 페이지들
  return (
    <div className="App">
      {isToken ? (
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <LoginError pageName={"Main"} error={"로그인 상태입니다!"} />
              }
            />
            <Route
              exact
              path="/login"
              element={
                <LoginError pageName={"Login"} error={"로그인 상태입니다!"} />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <LoginError
                  pageName={"Signup"}
                  error={"로그인 상태에서는 회원가입이 되지 않습니다!"}
                />
              }
            />

            <Route
              exact
              path="/logout"
              element={<Logout updateIsToken={setIsToken} />}
            />
            <Route exact path="/mypage" element={<MyPage />} />
          </Routes>
        </Router>
      ) : (
        // 로그인 안되었을때 페이지
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Login updateIsToken={setIsToken} />}
            />
            <Route
              exact
              path="/logout"
              element={
                <LoginError
                  pageName={"Logout"}
                  error={"로그인인 되지 않았습니다!"}
                />
              }
            />
            <Route
              exact
              path="/mypage"
              element={
                <LoginError
                  pageName={"MyPage"}
                  error={"먼저 로그인 하십시오!"}
                />
              }
            />
            <Route
              exact
              path="/login"
              element={<Login updateIsToken={setIsToken} />}
            />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
