import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import validator from "validator";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [newPasswordMessage, setNewPasswordMessage] = useState("");
  const [passMatchMessage, setPassMatchMessage] = useState("");

  const [axiosErrorMessage, setAxiosErrorMessage] = useState("");

  const OnOldPasswordChange = (e) => {
    setOldPassword(e.target.value);

    setAxiosErrorMessage("");
  };

  const OnNewPasswordChange = (e) => {
    setNewPassword(e.target.value);

    setAxiosErrorMessage("");

    if (
      validator.isAlphanumeric(e.target.value) &&
      e.target.value.length > 7 &&
      e.target.value.length <= 20 &&
      e.target.value.match(/\d+/) &&
      e.target.value.match(/[a-zA-Z]/)
    ) {
      setNewPasswordMessage("");
    } else {
      setNewPasswordMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최대길이: 20, 영문자 숫자 조합, 최소한 영문자 1개 숫자 1개씩 포함되어야 함)"
      );
    }

    if (e.target.value === confirmPassword) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const OnConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    setAxiosErrorMessage("");

    if (e.target.value === newPassword) {
      setPassMatchMessage("");
    } else {
      setPassMatchMessage("비밀번호와 비밀번호 확인란이 일치하지 않습니다!");
    }
  };

  const OnChangeClickHandler = async () => {
    if (
      newPassword === confirmPassword &&
      validator.isAlphanumeric(newPassword) &&
      newPassword.length > 7 &&
      newPassword.length <= 20 &&
      newPassword.match(/\d+/) &&
      newPassword.match(/[a-zA-Z]/)
    ) {
      //const tokenStr = localStorage.getItem("token");
      //const token = JSON.parse(tokenStr);

      await axios
        .patch("https://hansol.lhenry0.com/v1/api/account/my-page", {
          password: newPassword,
        })
        .then(function (res) {
          console.log(res);
          alert("비밀번호가 변경되었습니다!");
        })
        .catch(function (err) {
          console.log(err);
          setAxiosErrorMessage(err.message);
        });
    }
  };

  return (
    <MainChange>
      <UserChange>
        <h3>비밀번호 변경</h3>
        <LabelChange htmlFor="oldpass">현재 비밀번호</LabelChange>
        <InputChange
          type="password"
          id="oldpass"
          name="oldpass"
          value={oldPassword}
          onChange={OnOldPasswordChange}
        />
        <LabelChange htmlFor="newpass">새로운 비밀번호</LabelChange>
        <InputChange
          type="password"
          id="newpass"
          name="newpass"
          value={newPassword}
          onChange={OnNewPasswordChange}
        />
        {newPasswordMessage && (
          <MessageChange>{newPasswordMessage}</MessageChange>
        )}
        <LabelChange htmlFor="confirmpass">새로운 비밀번호 확인</LabelChange>
        <InputChange
          type="password"
          id="confirmpass"
          name="confirmpass"
          value={confirmPassword}
          onChange={OnConfirmPasswordChange}
        />
        {passMatchMessage && <MessageChange>{passMatchMessage}</MessageChange>}
        <ButtonChange onClick={OnChangeClickHandler}>
          비밀번호 변경
        </ButtonChange>
        {axiosErrorMessage && (
          <MessageChange>{axiosErrorMessage}</MessageChange>
        )}
      </UserChange>
    </MainChange>
  );
};

const MainChange = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserChange = styled.div`
  margin: 30px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid pink;
`;

const LabelChange = styled.label`
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 180px;
  padding-bottom: 1px;
`;

const InputChange = styled.input`
  width: 170px;
`;

const ButtonChange = styled.button`
  width: 100px;
  height: 30px;

  border: none;
  cursor: pointer;
`;

const MessageChange = styled.div`
  width: 260px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: center;
`;

export default ChangePassword;
