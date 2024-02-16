import { useLayoutEffect, useState } from "react";
import "./App.css";
import MyPageButton from "./components/MyPage/MyPageButton";
import { Routes, Route } from "react-router-dom";
import React from "react";
import AuthRouter from "./components/Login/AuthRouter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/authSlices";

function App() {
  const [userNickName, setUserNickName] = useState("");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (localStorage.getItem("nickName") !== null) {
      const nickName = localStorage.getItem("nickName");

      if (nickName !== null) {
        setUserNickName(nickName);
        dispatch(login());
      }
    } else {
      setUserNickName("");
      dispatch(logout());
    }
  }, [navigator, dispatch]);

  // 로그인 되었을 때 페이지들
  return (
    <div className="App">
      <MyPageButton />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                width: "100%",
                marginTop: "200px",
                textAlign: "center",
              }}
            >
              <button
                style={{ width: "300px", height: "120px" }}
                onClick={() => navigator("/login")}
              >
                로그인 페이지로...
              </button>
            </div>
          }
        />
        <Route path="/*" element={<AuthRouter userNickName={userNickName} />} />
      </Routes>
    </div>
  );
}

export default App;
