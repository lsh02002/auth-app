import React, { useState } from "react";
import validator from "validator";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState(0);
  const [userBirthDate, setUserBirthDate] = useState(null);
  //const [userPhone, setUserPhone] = useState("");
  //const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPassword2, setUserPassword2] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  //const [idMessage, setIdMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [birthDateMessage, setBirthDateMessage] = useState("");
  //const [phoneMessage, setPhoneMessage] = useState("");
  const [passMessage, setPassMessage] = useState("");
  const [pass2Message, setPass2Message] = useState("");
  const [passMatchMessage, setPassMatchMessage] = useState("");

  /*
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [userCheck, setUserCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const [allCheckMessage, setAllCheckMessage] = useState("");
  */

  const onUserNameChange = (e) => {
    setUserName(e.target.value.trim());

    if (e.target.value.trim() === "") {
      setNameMessage("이름란이 공백입니다!");
    } else {
      setNameMessage("");
    }
  };

  /*
  const onUserIdChange = (e) => {
    setUserId(e.target.value.trim());

    if (e.target.value.trim() === "") {
      setIdMessage("아이디란이 공백입니다!");
    } else {
      setIdMessage("");
    }
  };
  */

  const onUserNickNameChange = (e) => {
    setUserNickName(e.target.value.trim());

    if (e.target.value.trim() === "") {
      setNickNameMessage("닉네임란이 공백입니다!");
    } else {
      setNickNameMessage("");
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
    setUserBirthDate(date);

    if (date === null) {
      setBirthDateMessage("생년월일을 확인해 주세요!");
    } else {
      setBirthDateMessage("");
    }
  };

  /*
  const onUserPhoneChange = (e) => {
    setUserPhone(e.target.value);

    if (validator.isMobilePhone(e.target.value)) {
      setPhoneMessage("");
    } else {
      setPhoneMessage("핸드폰 번호 형식이 올바르지 않습니다!");
    }
  };
  */

  const onUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    setPassMessage("");

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최소 소문자: 1, 최소 대문자: 1, 최소 숫자: 1,최소 특수문자: 1)"
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

  /*
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUserCheck(true);
      setMarketingCheck(true);

      setAllCheckMessage("");
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUserCheck(false);
      setMarketingCheck(false);

      setAllCheckMessage("모든 내용에 동의 해주시기 바랍니다!");
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const userBtnEvent = () => {
    if (userCheck === false) {
      setUserCheck(true);
    } else {
      setUserCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };
  */

  const onSignupClickHandler = () => {
    if (userName === "") {
      setNameMessage("이름란이 공백입니다!");
    } else {
      setNameMessage("");
    }

    if (userNickName === "") {
      setNickNameMessage("닉네임란이 공백입니다!");
    } else {
      setNickNameMessage("");
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

    if (userBirthDate === null) {
      setBirthDateMessage("생년월일을 선택해 주세요!");
    } else {
      setBirthDateMessage("");
    }
    /*
    if (validator.isMobilePhone(userPhone)) {
      setPhoneMessage("");
    } else {
      setPhoneMessage("핸드폰 번호 형식이 올바르지 않습니다!");
    }
   
    if (userId === "") {
      setIdMessage("아이디란이 공백입니다!");
    } else {
      setIdMessage("");
    }
   
    if (userPassword === "") {
      setPassMessage("비밀번호란이 공백입니다!");
    } else {
      setPassMessage("");
    }
    */

    if (userPassword2 === "") {
      setPass2Message("비밀번호 확인란이 공백입니다!");
    } else {
      setPass2Message("");
    }

    if (
      validator.isStrongPassword(userPassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPassMessage("");
    } else {
      setPassMessage(
        "비밀번호가 강력하지 않습니다. (최소길이: 8, 최소 소문자: 1, 최소 대문자: 1, 최소 숫자: 1,최소 특수문자: 1)"
      );
    }

    /*
    if (allCheck !== true || ageCheck !== true || userCheck !== true) {
      setAllCheck(false);
    }

    if (allCheck === true) {
      setAllCheckMessage("");
    } else {
      setAllCheckMessage("모든 내용에 동의 해주시기 바랍니다!");
    }
    */
    if (
      userName !== "" &&
      userNickName !== "" &&
      validator.isEmail(userEmail) &&
      userBirthDate !== null &&
      //validator.isMobilePhone(userPhone) &&
      //userId !== "" &&
      userPassword !== "" &&
      userPassword2 !== "" &&
      userPassword === userPassword2 &&
      validator.isStrongPassword(userPassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      // &&
      //allCheck === true
    ) {
      alert(
        userName +
          ", " +
          userNickName +
          ", " +
          userEmail +
          ", " +
          userGender +
          ", " +
          userBirthDate +
          ", " +
          //userId +
          //", " +
          userPassword +
          " 회원가입 요청합니다!"
      );
    }
  };

  return (
    <UserSignupMain>
      <UserSignup>
        <UserTitleSignup>
          <h1>회원가입</h1>
        </UserTitleSignup>
        <LabelSignup htmlFor="user_name">이름</LabelSignup>
        <InputSignup
          type="text"
          name="user_name"
          id="user_name"
          placeholder="이름을 입력하세요."
          value={userName}
          onChange={onUserNameChange}
        />
        {nameMessage && <IdMessageSignup>{nameMessage}</IdMessageSignup>}
        {/*
        <LabelSignup htmlFor="user_id">아이디</LabelSignup>
        <InputSignup
          type="text"
          name="user_id"
          id="user_id"
          placeholder="아이디를 입력하세요."
          value={userId}
          onChange={onUserIdChange}
        />
        {idMessage && <IdMessageSignup>{idMessage}</IdMessageSignup>}
        */}
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
        {/*<LabelSignup htmlFor="user_phone">핸드폰 번호</LabelSignup>
        <InputSignup
          type="text"
          name="user_phone"
          id="user_phone"
          placeholder="핸드폰 번호를 입력하세요."
          value={userPhone}
          onChange={onUserPhoneChange}
        />
        {phoneMessage && <IdMessageSignup>{phoneMessage}</IdMessageSignup>}
        */}
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
          startDate={() => new Date()}
          showYearDropdown
          selected={userBirthDate}
          calendar="hijri"
          onChange={(date) => onBirthDateChange(date)}
        />
        {birthDateMessage && (
          <IdMessageSignup>{birthDateMessage}</IdMessageSignup>
        )}
        <LabelSignup htmlFor="user_pwd">비밀번호</LabelSignup>
        <InputSignup
          type="password"
          name="user_pwd"
          id="user_pwd"
          placeholder="비밀번호를 입력하세요."
          value={userPassword}
          onChange={onUserPasswordChange}
        />
        {passMessage && <IdMessageSignup>{passMessage}</IdMessageSignup>}
        <LabelSignup htmlFor="user_pwd2">비밀번호 확인</LabelSignup>
        <InputSignup
          type="password"
          name="user_pwd2"
          id="user_pwd2"
          placeholder="비밀번호를 한번더 입력하세요."
          value={userPassword2}
          onChange={onUserPassword2Change}
        />
        {pass2Message && <IdMessageSignup>{pass2Message}</IdMessageSignup>}
        <br />
        {passMatchMessage && (
          <IdMessageSignup>{passMatchMessage}</IdMessageSignup>
        )}

        {/* 동의 사항 체크 
        <CheckboxBoxSignup>
          <CheckboxSignup>
            <InputCheckBoxSignup
              type="checkbox"
              id="all-check"
              checked={allCheck}
              onChange={allBtnEvent}
            />
            <LableCheckBoxSignup>
              <b>전체동의</b>
            </LableCheckBoxSignup>
          </CheckboxSignup>
          <CheckboxSignup>
            <InputCheckBoxSignup
              type="checkbox"
              id="check1"
              checked={ageCheck}
              onChange={ageBtnEvent}
            />
            <LableCheckBoxSignup>
              만 14세 이상입니다 <span>(필수)</span>
            </LableCheckBoxSignup>
          </CheckboxSignup>
          <CheckboxSignup>
            <InputCheckBoxSignup
              type="checkbox"
              id="check2"
              checked={userCheck}
              onChange={userBtnEvent}
            />
            <LableCheckBoxSignup>
              이용약관 <span>(필수)</span>
            </LableCheckBoxSignup>
          </CheckboxSignup>
          <CheckboxSignup>
            <InputCheckBoxSignup
              type="checkbox"
              id="check3"
              checked={marketingCheck}
              onChange={marketingBtnEvent}
            />
            <LableCheckBoxSignup>
              마케팅 동의 <span>(선택)</span>
            </LableCheckBoxSignup>
          </CheckboxSignup>
          {allCheckMessage && (
            <IdMessageSignup>{allCheckMessage}</IdMessageSignup>
          )}
        </CheckboxBoxSignup>
           */}
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
/*
const LableCheckBoxSignup = styled.label`
  width: 200px;
`;

const CheckboxBoxSignup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CheckboxSignup = styled.div`
  width: 260px;
  font-size: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InputCheckBoxSignup = styled.input`
  width: 50px;
  padding: 0px;
  zoom: 1.2;
`;
*/
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
