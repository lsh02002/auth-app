import { useLayoutEffect, useState } from "react";
import "./App.css";
import MyPageButton from "./components/MyPage/MyPageButton";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./components/Login/Login";
import LoginError from "./components/Login/LoginError";
import AuthRouter from "./components/Login/AuthRouter";

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
        <>
          {/* 임시로 설정 : MyPageButton*/}
          <MyPageButton isToken={isToken} />
          <Routes>
            {/* 물론 메인페이지는 담당자 분이 바꾸셔도 됩니다 */}
            <Route
              path="/"
              element={
                <LoginError pageName={"Login"} error={"로그인 상태입니다!"} />
              }
            />
            <Route
              path="/*"
              element={
                <AuthRouter
                  isToken={isToken}
                  userNickName={userNickName}
                  updateIsToken={setIsToken}
                />
              }
            />
          </Routes>
        </>
      ) : (
        // 로그인 안되었을때 페이지
        <>
          <MyPageButton isToken={isToken} />
          <Routes>
            <Route path="/" element={<Login updateIsToken={setIsToken} />} />
            <Route
              path="/*"
              element={
                <AuthRouter
                  isToken={isToken}
                  userNickName={userNickName}
                  updateIsToken={setIsToken}
                />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
