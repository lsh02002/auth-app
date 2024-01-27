import React from "react";
import MyPageMenu from "./MyPageMenu.tsx";
import MyRestaurant from "./MyRestaurant.tsx";
import MyFavoriteRestaurant from "./MyFavoriteRestaurant.tsx";
import MyEditProfile from "./MyEditProfile.tsx";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MyInfo from "./MyInfo.tsx";

const MyPage = () => {
  const { pagenumber } = useParams();

  if (pagenumber === "0") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo />
            <MyRestaurant />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "1") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo />
            <MyFavoriteRestaurant />
          </MyPageContainer>
        </MyMain>
      </>
    );
  } else if (pagenumber === "2") {
    return (
      <>
        <MyPageMenu />
        <MyMain>
          <MyPageContainer>
            <MyInfo />
            <MyEditProfile />
          </MyPageContainer>
        </MyMain>
      </>
    );
  }
};

const MyMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPageContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export default MyPage;
