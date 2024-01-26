import React from "react";
import styled from "styled-components";

const MyRestaurant = () => {
  return (
    <>
      <hr />
      <MyMain>
        <MyRestaurantContainer></MyRestaurantContainer>
      </MyMain>
    </>
  );
};

const MyMain = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyRestaurantContainer = styled.div`
  width: 500px;
  height: 700px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid gray;
`;

export default MyRestaurant;
