import React, { useState } from "react";
import validator from "validator";
import "./Signup.css";
import titlepic from "./assets/titlepic.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPassword2, setUserPassword2] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [pass2Message, setPass2Message] = useState("");
  const [passMatchMessage, setPassMatchMessage] = useState("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
    setNameMessage("");
  };

  const onUserIdChange = (e) => {
    setUserEmail(e.target.value);

    if (validator.isEmail(e.target.value)) {
      setEmailMessage("");
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }
  };

  const onUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPassMessage("");

    if (e.target.value === userPassword2) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const onUserPassword2Change = (e) => {
    setUserPassword2(e.target.value);
    setPass2Message("");

    if (userPassword === e.target.value) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const onSignupButtonClickHandler = () => {
    if (userName === "") {
      setNameMessage("이름란이 공백입니다!");
    } else {
      setNameMessage("");
    }

    if (userEmail === "") {
      setEmailMessage("이메일란이 공백입니다!");
    } else {
      setEmailMessage("");
    }

    if (validator.isEmail(userEmail)) {
      setEmailMessage("");
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }

    if (userPassword === "") {
      setPassMessage("비밀번호란이 공백입니다!");
    } else {
      setPassMessage("");
    }

    if (userPassword2 === "") {
      setPass2Message("비밀번호 확인란이 공백입니다!");
    } else {
      setPass2Message("");
    }

    /*
    if (userPassword !== userPassword2) {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    } else {
      setPassMatchMessage("");
    }
    */

    if (
      userName !== "" &&
      validator.isEmail(userEmail) &&
      userPassword !== "" &&
      userPassword2 !== "" &&
      userPassword === userPassword2
    ) {
      alert(
        userName +
          ", " +
          userEmail +
          ", " +
          userPassword +
          " 회원가입 요청합니다!"
      );
    }
  };

  return (
    <div className="user-signup">
      <div className="user-title-image-signup">
        <img src={titlepic} alt="" />
        <div className="user-title-text-signup">
          <h1>회원가입</h1>
        </div>
      </div>
      <div className="user-name-signup">
        <input
          type="text"
          name="user_name"
          value={userName}
          onChange={onUserNameChange}
          placeholder="이름"
        />
        <div className="id-message-signup">{nameMessage}</div>
      </div>
      <div className="user-id-signup">
        <input
          type="email"
          name="user_id"
          value={userEmail}
          onChange={onUserIdChange}
          placeholder="이메일"
        />
        <div className="id-message-signup">{emailMessage}</div>
      </div>
      <div className="user-pwd-signup">
        <input
          type="password"
          name="user_pwd"
          value={userPassword}
          onChange={onUserPasswordChange}
          placeholder="비밀번호"
        />
        <div className="id-message-signup">{passMessage}</div>
      </div>
      <div className="user-pwd2-signup">
        <input
          type="password"
          name="user_pwd2"
          value={userPassword2}
          onChange={onUserPassword2Change}
          placeholder="비밀번호 확인"
        />
        <div className="id-message-signup">{pass2Message}</div>
        <br />
        <div className="id-message-signup">{passMatchMessage}</div>
      </div>
      <button
        className="user-signup-button"
        onClick={onSignupButtonClickHandler}
      >
        회원 가입
      </button>
      <Link to="/">로그인 하기</Link>
    </div>
  );
};

export default Signup;
