import { useLayoutEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import LoginError from "./pages/Login/LoginError";
import Logout from "./pages/Login/Logout";
import MyPage from "./pages/MyPage/MyPage";
import Signup from "./pages/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPageButton from "./pages/MyPage/MyPageButton";
import FindPassword from "./pages/Login/FindPassword";
import FindEmail from "./pages/Login/FindEmail";

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
          {/* 임시로 설정 : MyPageButton*/}
          <MyPageButton isToken={isToken} />
          <Routes>
            {/* 물론 메인페이지는 담당자 분이 바꾸셔도 됩니다 */}
            <Route
              exact
              path="/"
              element={
                <LoginError pageName={"Main"} error={"로그인 상태입니다!"} />
              }
            />
            <Route
              exact
              path="/find-email"
              element={
                <LoginError
                  pageName={"FindEmail"}
                  error={"로그인 상태입니다!"}
                />
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

            <Route exact path="/findpassword" element={<FindPassword />} />

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
          <MyPageButton isToken={isToken} />
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
              path="/changepassword"
              element={
                <LoginError
                  pageName={"ChangePassword"}
                  error={"먼저 로그인하십시오!"}
                />
              }
            />
            <Route exact path="/find-email" element={<FindEmail />} />
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
