import React, { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "./logout-background.jpg";
//import axios from "axios";

const Logout = ({ nickName, updateIsToken }) => {
  const navigator = useNavigate();
  const [userToken, setUserToken] = useState("");

  useLayoutEffect(() => {
    if (nickName === "") {
      setUserToken("");
    } else {
      setUserToken(nickName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutHandler = () => {
    /*await axios
      .post("https://hansol.lhenry0.com/auth/logout")
      .then((res) => {
        //로그아웃 성공
        localStorage.removeItem("token");
        updateIsToken(false);
        console.log(res);

        alert("로그아웃 되셨습니다!");
        navigator("/");
      })
      .catch((err) => {
        //로그아웃에 실패하면 err 출력
        console.log(err.response.data);
      });
*/
    localStorage.removeItem("token");
    updateIsToken(false);

    navigator("/");
  };

  const onClickHandler = () => {
    navigator("/");
  };

  if (userToken) {
    return (
      <>
        <UserLogout>
          <BackgroundImgLogout>
            <ImgLogout src={backgroundImage} alt="" />
            <MessageLogout>
              {userToken && (
                <>
                  <b>{userToken} 님</b> 로그아웃 하시겠습니까?
                </>
              )}
              <ButtonLogout onClick={logoutHandler}>로그 아웃</ButtonLogout>
            </MessageLogout>
          </BackgroundImgLogout>
        </UserLogout>
      </>
    );
  } else if (userToken === "") {
    return (
      <>
        <UserLogout>
          <BackgroundImgLogout>
            <ImgLogout src={backgroundImage} alt="" />
            <MessageLogout>
              로그인 상태가 아닙니다! 메인홈페이지로 이동합니다!
              <ButtonLogout onClick={onClickHandler}>
                메인 페이지로
              </ButtonLogout>
            </MessageLogout>
          </BackgroundImgLogout>
        </UserLogout>
      </>
    );
  }
};

const UserLogout = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImgLogout = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgLogout = styled.img`
  width: 560px;
  border-radius: 80px;
`;

const MessageLogout = styled.div`
  margin-top: 30px;
  width: 200px;
`;

const ButtonLogout = styled.button`
  margin: 20px;
  color: white;
  font-weight: 600;
  width: 200px;
  height: 80px;
  background-color: black;
  cursor: pointer;
  border: none;
  border-radius: 20px;
`;

export default Logout;