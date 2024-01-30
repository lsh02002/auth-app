import { useLayoutEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login.tsx";
import LoginError from "./pages/Login/LoginError.tsx";
import Logout from "./pages/Login/Logout.tsx";
import MyPage from "./pages/MyPage/MyPage.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPageButton from "./pages/MyPage/MyPageButton.tsx";
import FindPassword from "./pages/Login/FindPassword.tsx";
import FindEmail from "./pages/Login/FindEmail.tsx";
import ChangePassword from "./pages/Login/ChangePassword.tsx";
import Redirect from "./pages/Login/Redirect.tsx";
import React from "react";

function App() {
  const [isToken, setIsToken] = useState(false);
  const [userNickName, setUserNickName] = useState("");

  useLayoutEffect(() => {
    if (localStorage.getItem("nickName") !== null) {
      const nickName = localStorage.getItem("nickName");

      if (nickName !== null) {
        setUserNickName(nickName);
        setIsToken(true);
      }
    } else {
      setUserNickName("");
      setIsToken(false);
    }
  }, [isToken, setIsToken]);

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
              path="/"
              element={
                <LoginError pageName={"Main"} error={"로그인 상태입니다!"} />
              }
            />
            <Route
              path="/find-email"
              element={
                <LoginError
                  pageName={"FindEmail"}
                  error={"로그인 상태입니다!"}
                />
              }
            />
            <Route
              path="/login"
              element={
                <LoginError pageName={"Login"} error={"로그인 상태입니다!"} />
              }
            />
            <Route
              path="/signup"
              element={
                <LoginError
                  pageName={"Signup"}
                  error={"로그인 상태에서는 회원가입이 되지 않습니다!"}
                />
              }
            />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/findpassword" element={<FindPassword />} />

            <Route
              path="/logout"
              element={
                <Logout nickName={userNickName} updateIsToken={setIsToken} />
              }
            />
            <Route path="/mypage/:pagenumber" element={<MyPage />} />
          </Routes>
        </Router>
      ) : (
        // 로그인 안되었을때 페이지
        <Router>
          <MyPageButton isToken={isToken} />
          <Routes>
            <Route
              path="/redirect"
              element={<Redirect updateIsToken={setIsToken} />}
            />
            <Route path="/" element={<Login updateIsToken={setIsToken} />} />
            <Route
              path="/logout"
              element={
                <LoginError
                  pageName={"Logout"}
                  error={"로그인인 되지 않았습니다!"}
                />
              }
            />
            <Route
              path={"/mypage/*"}
              element={
                <LoginError
                  pageName={"MyPage"}
                  error={"먼저 로그인 하십시오!"}
                />
              }
            />
            <Route
              path="/change-password"
              element={
                <LoginError
                  pageName={"ChangePassword"}
                  error={"먼저 로그인하십시오!"}
                />
              }
            />
            <Route path="/find-email" element={<FindEmail />} />
            <Route
              path="/login"
              element={<Login updateIsToken={setIsToken} />}
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
