import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import styled from "styled-components";
import titlepic from "./assets/titlepic.png";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");

  const onUserIdChange = (e) => {
    setUserId(e.target.value);

    if (validator.isEmail(e.target.value)) {
      setIdMessage("");
      //console.log(userId + ", " + userPassword);
    } else {
      setIdMessage("이메일 형식이 올바르지 않습니다!");
    }
  };

  const onUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPassMessage("");
  };

  const onLoginButtonClickHandler = () => {
    //입력된 이메일 유효성 검사 모듈
    if (userId === "") {
      setIdMessage("이메일란이 공백입니다!");
    } else {
      setIdMessage("");
    }

    if (validator.isEmail(userId)) {
      setIdMessage("");
      //console.log(userId + ", " + userPassword);
    } else {
      setIdMessage("이메일 형식이 올바르지 않습니다!");
    }

    if (userPassword === "") {
      setPassMessage("비밀번호란이 공백입니다!");
    } else {
      setPassMessage("");
    }

    if (idMessage === "" && userId !== "" && userPassword !== "") {
      alert(userId + ", " + userPassword + " 로그인 요청합니다!");
    }
  };

  return (
    <>
      <UserLoginMain>
        <UserLogin>
          <UserTitleImageLogin>
            <Link to="/">
              <ImgLogin src={titlepic} alt="" />
            </Link>
          </UserTitleImageLogin>
          <InputLogin
            type="email"
            name="user_id"
            value={userId}
            onChange={onUserIdChange}
            placeholder="이메일"
          />
          <IdMessageLogin>{idMessage}</IdMessageLogin>
          <InputLogin
            type="password"
            name="user_pwd"
            value={userPassword}
            onChange={onUserPasswordChange}
            placeholder="비밀번호"
          />
          <IdMessageLogin>{passMessage}</IdMessageLogin>
          <UserLoginButton
            onClick={onLoginButtonClickHandler}
            className="user-login-button"
          >
            로그인
          </UserLoginButton>
          <LinkLogin to="/signup">회원가입 하기</LinkLogin>
        </UserLogin>
      </UserLoginMain>
    </>
  );
};

const UserLoginMain = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const UserLogin = styled.div`
  padding: 15px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(240, 200, 200);
`;

const UserTitleImageLogin = styled.div`
  width: 260px;
  margin: 30px 10px 30px 10px;
`;

const ImgLogin = styled.img`
  width: 50%;
`;

const InputLogin = styled.input`
  font-weight: bold;
  height: 40px;
  color: rgb(200, 200, 200);
  font-size: 15px;
  width: 260px;

  border-width: 1px;
  border-color: rgb(250, 250, 250);

  &::placeholder {
    padding-left: 15px;
    color: rgb(200, 200, 200);
  }

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const UserLoginButton = styled.button`
  margin: 30px 0px 30px 0px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  width: 270px;
  height: 50px;

  border: none;
  border-radius: 5px;
  background-color: rgb(48, 192, 224);

  &:hover {
    background-color: rgb(40, 182, 214);
    cursor: pointer;
  }
`;

const IdMessageLogin = styled.div`
  color: red;
  font-size: 12px;
  text-align: left;
`;

const LinkLogin = styled(Link)`
  width: 270px;
  text-align: right;
`;

export default Login;
