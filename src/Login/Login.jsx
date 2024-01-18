import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");

  const onUserIdChange = (e) => {
    setUserId(e.target.value);

    if (validator.isEmail(e.target.value)) {
      setIdMessage("");
    } else {
      setIdMessage("이메일 형식이 올바르지 않습니다!");
    }
  };

  const onUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPassMessage("");
  };

  const onLoginClickHandler = () => {
    //입력된 이메일 유효성 검사 모듈
    if (userId === "") {
      setIdMessage("이메일란이 공백입니다!");
    } else {
      setIdMessage("");
    }

    if (validator.isEmail(userId)) {
      setIdMessage("");
    } else {
      setIdMessage("이메일 형식이 올바르지 않습니다!");
    }

    if (userPassword === "") {
      setPassMessage("비밀번호란이 공백입니다!");
    } else {
      setPassMessage("");
    }

    if (idMessage === "" && userId !== "" && userPassword !== "") {
      axios
        .post("https://hansol.lhenry0.com/auth/login", {
          email: userId,
          password: userPassword,
        })
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  return (
    <>
      <UserLoginMain>
        <UserLogin>
          <UserTitleLogin>
            <h1>로그인</h1>
          </UserTitleLogin>
          <LabelLogin htmlFor="user_id">이메일</LabelLogin>
          <InputLogin
            type="email"
            id="user_id"
            name="user_id"
            placeholder="이메일 입력하세요."
            value={userId}
            onChange={onUserIdChange}
          />
          <IdMessageLogin>{idMessage}</IdMessageLogin>
          <LabelLogin htmlFor="user_pwd">비밀번호</LabelLogin>
          <InputLogin
            type="password"
            id="user_pwd"
            name="user_pwd"
            placeholder="비밀번호를 입력하세요."
            value={userPassword}
            onChange={onUserPasswordChange}
          />
          <IdMessageLogin>{passMessage}</IdMessageLogin>
          <UserLoginButton onClick={onLoginClickHandler}>
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

  border: 1px solid pink;
`;

const UserTitleLogin = styled.div`
  width: 260px;
  margin: 10px 10px 10px 10px;
`;

const LabelLogin = styled.label`
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 260px;
  padding-bottom: 5px;
`;

const InputLogin = styled.input`
  height: 30px;
  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 260px;
  border-radius: 10px;

  border-width: 1px;
  border-color: rgb(253, 253, 253);

  &::placeholder {
    padding-left: 5px;
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
  width: 260px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: left;
`;

const LinkLogin = styled(Link)`
  width: 270px;
  text-align: right;
`;

export default Login;
