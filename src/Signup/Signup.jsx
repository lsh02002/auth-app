import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import validator from "validator";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState(0);
  const [userBirthDate, setUserBirthDate] = useState("");
  //스트링 겂이 아닌 생년월일 오브젝트 상태변수
  const [userBirthDateObj, setUserBirthDateObj] = useState(null);

  //비밀번호 보이기/ 숨기기 상태변수
  const [isShowPwd, setIsShowPwd] = useState(false);

  const [userPassword, setUserPassword] = useState("");
  const [userPassword2, setUserPassword2] = useState("");

  const [nickNameMessage, setNickNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [birthDateMessage, setBirthDateMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [pass2Message, setPass2Message] = useState("");
  const [passMatchMessage, setPassMatchMessage] = useState("");

  const navigator = useNavigate();

  const onUserNickNameChange = (e) => {
    setUserNickName(e.target.value.trim());

    if (
      e.target.value.trim() !== "" &&
      e.target.value.length >= 2 &&
      e.target.value.length <= 8
    ) {
      setNickNameMessage("");
    } else {
      setNickNameMessage("올바른 닉네임이 아닙니다.(최소길이: 2, 최대길이: 8)");
    }
  };

  const onUserEmailChange = (e) => {
    setUserEmail(e.target.value);

    if (validator.isEmail(e.target.value)) {
      setEmailMessage("");
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }
  };

  const onBirthDateChange = (date) => {
    const changedDate = moment(date).format("YYYY-MM-DD");

    if (date === null || date === undefined) {
      setUserBirthDate("");
      setBirthDateMessage("생년월일을 확인해 주세요!");
    } else {
      setUserBirthDateObj(date);
      setBirthDateMessage("");
      setUserBirthDate(changedDate);
    }
  };

  const onUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPassMessage("");

    if (
      validator.isAlphanumeric(e.target.value) &&
      e.target.value.length > 7 &&
      e.target.value.length <= 20 &&
      e.target.value.match(/\d+/) &&
      e.target.value.match(/[a-zA-Z]/)
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최대길이: 20, 영문자 숫자 조합, 최소한 영문자 1개 숫자 1개씩 포함되어야 함)"
      );
    }

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

  const onTogglePwdShowHandler = () => {
    if (!isShowPwd) {
      setIsShowPwd(true);
    } else {
      setIsShowPwd(false);
    }
  };

  const onSignupClickHandler = async () => {
    if (
      userNickName !== "" &&
      userNickName.length >= 2 &&
      userNickName.length <= 8
    ) {
      setNickNameMessage("");
    } else {
      setNickNameMessage("올바른 닉네임이 아닙니다.(최소길이: 2, 최대길이: 8)");
    }

    if (userEmail === "") {
      setEmailMessage("이메일란이 비어있습니다!");
    } else {
      setEmailMessage("");
    }

    if (validator.isEmail(userEmail)) {
      setEmailMessage("");
    } else {
      setEmailMessage("이메일 형식이 올바르지 않습니다!");
    }

    if (userBirthDate === "") {
      setBirthDateMessage("생년월일을 선택해 주세요!");
    } else {
      setBirthDateMessage("");
    }

    if (userPassword2 === "") {
      setPass2Message("비밀번호 확인란이 비어있습니다!");
    } else {
      setPass2Message("");
    }

    if (
      validator.isAlphanumeric(userPassword) &&
      userPassword.length > 7 &&
      userPassword.length <= 20 &&
      userPassword.match(/\d+/) &&
      userPassword.match(/[a-zA-Z]/)
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최대길이: 20, 영문자 숫자 조합, 최소한 영문자 1개 숫자 1개씩 포함되어야 함)"
      );
    }

    if (
      userNickName !== "" &&
      userNickName.length >= 2 &&
      userNickName.length <= 8 &&
      validator.isEmail(userEmail) &&
      userBirthDate !== "" &&
      userPassword !== "" &&
      userPassword2 !== "" &&
      userPassword === userPassword2 &&
      validator.isAlphanumeric(userPassword) &&
      userPassword.length > 7 &&
      userPassword.length <= 20 &&
      userPassword.match(/\d+/) &&
      userPassword.match(/[a-zA-Z]/)
    ) {
      const gender2 = userGender === 0 ? "남성" : "여성";

      await axios
        .post("https://hansol.lhenry0.com/auth/sign-up", {
          email: userEmail,
          nick_name: userNickName,
          password: userPassword,
          password_confirm: userPassword2,
          date_of_birth: userBirthDate,
          gender: gender2,
        })
        .then(function (res) {
          console.log(res);
          alert(
            userEmail + " 님 가입을 축하드립니다! 로그인 페이지로 이동합니다."
          );
          navigator("/login");
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  return (
    <UserSignupMain>
      <UserSignup>
        <UserTitleSignup>
          <h1>회원가입</h1>
        </UserTitleSignup>
        <LabelSignup htmlFor="user_nickname">닉네임</LabelSignup>
        <InputSignup
          type="text"
          name="user_nickname"
          id="user_nickname"
          placeholder="닉네임을 입력하세요."
          value={userNickName}
          onChange={onUserNickNameChange}
        />
        {nickNameMessage && (
          <IdMessageSignup>{nickNameMessage}</IdMessageSignup>
        )}
        <LabelSignup htmlFor="user_id">이메일</LabelSignup>
        <InputSignup
          type="email"
          name="user_id"
          id="user_id"
          placeholder="이메일을 입력하세요."
          value={userEmail}
          onChange={onUserEmailChange}
        />
        {emailMessage && <IdMessageSignup>{emailMessage}</IdMessageSignup>}
        <RadioSignup>
          <RadioInputSignup
            type="radio"
            name="man"
            id="user_gender1"
            value={userGender}
            checked={userGender === 0}
            onChange={() => setUserGender(0)}
          />
          <RadioLabelSignup htmlFor="user_gender1">남성</RadioLabelSignup>
          <RadioInputSignup
            type="radio"
            name="women"
            id="user_gender2"
            value={userGender}
            checked={userGender === 1}
            onChange={() => setUserGender(1)}
          />
          <RadioLabelSignup htmlFor="user_gender2">여성</RadioLabelSignup>
        </RadioSignup>
        <LabelSignup htmlFor="user_birth">생년월일</LabelSignup>
        <ReactDatePicker
          id="user_birth"
          dateFormat="yyyy-MM-dd"
          startDate={() => new Date()}
          showYearDropdown
          selected={userBirthDateObj}
          onChange={(date) => onBirthDateChange(date)}
        />
        {birthDateMessage && (
          <IdMessageSignup>{birthDateMessage}</IdMessageSignup>
        )}
        <LabelSignup htmlFor="user_pwd">비밀번호</LabelSignup>
        <InputSignup
          type={isShowPwd ? "text" : "password"}
          name="user_pwd"
          id="user_pwd"
          placeholder="비밀번호를 입력하세요."
          value={userPassword}
          onChange={onUserPasswordChange}
        />
        {passMessage && <IdMessageSignup>{passMessage}</IdMessageSignup>}
        <LabelSignup htmlFor="user_pwd2">비밀번호 확인</LabelSignup>
        <InputSignup
          type={isShowPwd ? "text" : "password"}
          name="user_pwd2"
          id="user_pwd2"
          placeholder="비밀번호를 한번더 입력하세요."
          value={userPassword2}
          onChange={onUserPassword2Change}
        />
        <PwdCheckDivSignup>
          <PwdCheckBoxSignup
            type="checkbox"
            id="user_check_show_pwd"
            onClick={onTogglePwdShowHandler}
          />
          <PwdCheckLabelSignup htmlFor="user_check_show_pwd">
            비밀번호 보이기
          </PwdCheckLabelSignup>
        </PwdCheckDivSignup>
        {pass2Message && <IdMessageSignup>{pass2Message}</IdMessageSignup>}
        <br />
        {passMatchMessage && (
          <IdMessageSignup>{passMatchMessage}</IdMessageSignup>
        )}
        <UserSignupButton onClick={onSignupClickHandler}>
          회원 가입
        </UserSignupButton>
        <LinkSignup to="/">로그인 하기</LinkSignup>
      </UserSignup>
    </UserSignupMain>
  );
};

const UserSignupMain = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const UserSignup = styled.div`
  padding: 15px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid pink;
`;

const UserTitleSignup = styled.div`
  text-align: left;
  width: 260px;
  margin: 10px 10px 10px 10px;
`;

const LabelSignup = styled.label`
  padding-top: 10px;
  color: rgb(100, 100, 100);
  width: 260px;
  padding-bottom: 5px;
`;

const InputSignup = styled.input`
  height: 30px;
  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 260px;
  border-radius: 10px;

  border-width: 1px;
  border-color: rgb(250, 250, 250);

  &::placeholder {
    padding-left: 5px;
    color: rgb(200, 200, 200);
  }

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

const RadioSignup = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
`;

const RadioInputSignup = styled.input`
  align: left;
`;

const RadioLabelSignup = styled.label`
  width: 100px;
`;

const PwdCheckDivSignup = styled.div`
  display: flex;
  justify-content: end;
  width: 260px;
`;
const PwdCheckBoxSignup = styled.input`
  align: left;
`;

const PwdCheckLabelSignup = styled.label`
  width: 80px;
  font-size: 11px;
`;

const UserSignupButton = styled.button`
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

const IdMessageSignup = styled.div`
  width: 260px;
  padding-top: 5px;
  color: red;
  font-size: 12px;
  text-align: left;
`;

const LinkSignup = styled(Link)`
  width: 270px;
  text-align: right;
`;

export default Signup;
