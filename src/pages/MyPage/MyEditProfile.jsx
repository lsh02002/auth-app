import React from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

const MyEditProfile = () => {
  return (
    <>
      <hr />
      <UserInfoProfile>
        <UserInfoContainerProfile>
          <h1>회원정보 수정 페이지</h1>
          <InputContainerProfile>
            <LabelProfile htmlFor="user_nickname">닉네임 :</LabelProfile>
            <InputProfile type="text" id="user_nickname" />
          </InputContainerProfile>
          <InputContainerProfile>
            <LabelProfile htmlFor="user_phone">전화번호 :</LabelProfile>
            <InputProfile type="text" id="user_phone" />
          </InputContainerProfile>
          <InputContainerProfile>
            <LabelProfile htmlFor="user_email">이메일 :</LabelProfile>
            <InputProfile type="text" id="user_email" />
          </InputContainerProfile>
          <InputContainerProfile>
            <LabelProfile htmlFor="user_neighbor">이웃 :</LabelProfile>
            <InputProfile type="text" id="user_neighbor" />
          </InputContainerProfile>
          <RadioContainerProfile>
            <LabelProfile>성별:</LabelProfile>
            <RadioProfile>
              <RadioInputProfile type="radio" id="user_gender1" />
              <RadioLabelProfile htmlFor="user_gender1">남성</RadioLabelProfile>
              <RadioInputProfile type="radio" id="user_gender2" />
              <RadioLabelProfile htmlFor="user_gender2">여성</RadioLabelProfile>
            </RadioProfile>
          </RadioContainerProfile>
          <BirthDateContainerProfile>
            <LabelProfile>생년월일:</LabelProfile>
            <ReactDatePicker
              id="user_birth"
              dateFormat="yyyy-MM-dd"
              startDate={() => new Date()}
              showYearDropdown
            />
          </BirthDateContainerProfile>
          <InputContainerProfile>
            <LabelProfile htmlFor="user_image">프로필 사진:</LabelProfile>
            <InputProfile type="file" id="user_image" />
          </InputContainerProfile>
          <br />
          <br />
          <br />
          <InputContainerProfile>
            <LabelProfile htmlFor="user_pwd2">비밀번호 확인:</LabelProfile>
            <InputProfile
              type="password"
              id="user_pwd2"
              placeholder="확인을 위해 비밀번호를 입력하세요."
            />
          </InputContainerProfile>
          <PwdCheckDivProfile>
            <PwdCheckBoxProfile type="checkbox" id="user_check_show_pwd" />
            <PwdCheckLabelProfile htmlFor="user_check_show_pwd">
              비밀번호 보이기
            </PwdCheckLabelProfile>
          </PwdCheckDivProfile>
          <UserSignupButton>회원정보 수정하기</UserSignupButton>
        </UserInfoContainerProfile>
      </UserInfoProfile>
    </>
  );
};

const UserInfoProfile = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfoContainerProfile = styled.div`
  width: 500px;
  height: 700px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid gray;
`;

const InputContainerProfile = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const LabelProfile = styled.label`
  width: 150px;
  padding-right: 20px;
`;

const InputProfile = styled.input`
  height: 25px;
  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 300px;
  border-radius: 10px;

  border-width: 1px;
  border-color: rgb(250, 250, 250);
`;

const RadioContainerProfile = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const RadioProfile = styled.div`
  display: flex;
  justify-content: start;
`;

const RadioInputProfile = styled.input`
  align: left;
`;

const RadioLabelProfile = styled.label`
  width: 80px;
  font-size: 15px;
`;

const BirthDateContainerProfile = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 20px;
`;

const PwdCheckDivProfile = styled.div`
  display: flex;
  justify-content: end;
  width: 400px;
`;

const PwdCheckBoxProfile = styled.input`
  align: left;
`;

const PwdCheckLabelProfile = styled.label`
  width: 120px;
  font-size: 15px;
`;

const UserSignupButton = styled.button`
  margin: 50px 0px 30px 0px;
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

export default MyEditProfile;
