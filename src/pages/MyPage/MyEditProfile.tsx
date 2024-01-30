import React from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
//import axios from "axios";

const MyEditProfile = () => {
  /*  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const getUserInfo = async () => {
      const token = localStorage.getItem("token");

      if (token !== "") {
        await axios
          .get("https://hansol.lhenry0.com/v1/api/account/my-page", {
            headers: {
              Token: token,
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    getUserInfo();
  }, []);
*/
  return (
    <>
      <hr />
      <UserInfoPro>
        <UserInfoContainerPro>
          <h1>회원정보 수정 페이지</h1>
          <InputContainerPro>
            <LabelPro htmlFor="user_nickname">닉네임 :</LabelPro>
            <InputPro type="text" id="user_nickname" />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_phone">전화번호 :</LabelPro>
            <InputPro type="text" id="user_phone" />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_email">이메일 :</LabelPro>
            <InputPro type="text" id="user_email" />
          </InputContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_neighbor">이웃 :</LabelPro>
            <InputPro type="text" id="user_neighbor" />
          </InputContainerPro>
          <RadioContainerPro>
            <LabelPro>성별:</LabelPro>
            <RadioPro>
              <RadioInputPro type="radio" id="user_gender1" />
              <RadioLabelPro htmlFor="user_gender1">남성</RadioLabelPro>
              <RadioInputPro type="radio" id="user_gender2" />
              <RadioLabelPro htmlFor="user_gender2">여성</RadioLabelPro>
            </RadioPro>
          </RadioContainerPro>
          <BirthDateContainerPro>
            <LabelPro>생년월일:</LabelPro>
            <ReactDatePicker
              id="user_birth"
              dateFormat="yyyy-MM-dd"
              startDate={null}
              showYearDropdown
              onChange={() => {}}
            />
          </BirthDateContainerPro>
          <InputContainerPro>
            <LabelPro htmlFor="user_image">프로필 사진:</LabelPro>
            <InputPro type="file" id="user_image" />
          </InputContainerPro>
          <br />
          <br />
          <br />
          <InputContainerPro>
            <LabelPro htmlFor="user_pwd2">비밀번호 확인:</LabelPro>
            <InputPro
              type="password"
              id="user_pwd2"
              placeholder="확인을 위해 비밀번호를 입력하세요."
            />
          </InputContainerPro>
          <PwdCheckDivPro>
            <PwdCheckBoxPro type="checkbox" id="user_check_show_pwd" />
            <PwdCheckLabelPro htmlFor="user_check_show_pwd">
              비밀번호 보이기
            </PwdCheckLabelPro>
          </PwdCheckDivPro>
          <UserSignupButton>회원정보 수정하기</UserSignupButton>
        </UserInfoContainerPro>
      </UserInfoPro>
    </>
  );
};

const UserInfoPro = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfoContainerPro = styled.div`
  width: 500px;
  height: 700px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid gray;
`;

const InputContainerPro = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const LabelPro = styled.label`
  width: 150px;
  padding-right: 20px;
`;

const InputPro = styled.input`
  height: 25px;
  color: rgb(200, 200, 200);
  font-size: 13px;
  width: 300px;
  border-radius: 10px;

  border-width: 1px;
  border-color: rgb(250, 250, 250);
`;

const RadioContainerPro = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const RadioPro = styled.div`
  display: flex;
  justify-content: start;
`;

const RadioInputPro = styled.input`
  align: left;
`;

const RadioLabelPro = styled.label`
  width: 80px;
  font-size: 15px;
`;

const BirthDateContainerPro = styled.div`
  width: 400px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 20px;
`;

const PwdCheckDivPro = styled.div`
  display: flex;
  justify-content: end;
  width: 400px;
`;

const PwdCheckBoxPro = styled.input`
  align: left;
`;

const PwdCheckLabelPro = styled.label`
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
