import React from "react";
import styled from "styled-components";

const MyPageMenu = ({ updatePageNumber }) => {
  function onUpdatePageNumberHandler(pageNumber) {
    updatePageNumber(pageNumber);
    localStorage.setItem("mypagenumber", pageNumber);
  }

  return (
    <>
      <MyMainPage>
        <MenuMyPage>
          <MyRestaurantMypage>
            <ButtonMypage onClick={() => onUpdatePageNumberHandler(0)}>
              나의 맛집
            </ButtonMypage>
          </MyRestaurantMypage>
          <FavoriteRestaurantsMypage>
            <ButtonMypage onClick={() => onUpdatePageNumberHandler(1)}>
              찜한 맛집
            </ButtonMypage>
          </FavoriteRestaurantsMypage>
          <EditProfileMypage>
            <ButtonMypage onClick={() => onUpdatePageNumberHandler(2)}>
              회원 정보 수정
            </ButtonMypage>
          </EditProfileMypage>
        </MenuMyPage>
      </MyMainPage>
    </>
  );
};

const MyMainPage = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const MenuMyPage = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyRestaurantMypage = styled.div`
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const FavoriteRestaurantsMypage = styled.div`
  padding: 20px;
  &:hover {
    cursor: pointer;
`;

const EditProfileMypage = styled.div`
  padding: 20px;
  &:hover {
    cursor: pointer;
`;

const ButtonMypage = styled.button`
  margin: 5px;
  width: 150px;
  color: white;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  background-color: black;
  border-radius: 12px;
`;

export default MyPageMenu;
