import React, { useEffect, useState } from "react";
import MyPageMenu from "./MyPageMenu";
import MyRestaurant from "./MyRestaurant";
import MyFavoriteRestaurant from "./MyFavoriteRestaurant";
import MyEditProfile from "./MyEditProfile";

const MyPage = () => {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const page = localStorage.getItem("mypagenumber");

    if (page === null || page === undefined) {
      setPageNumber(0);
    } else {
      setPageNumber(Number(page));
    }
  }, []);

  if (pageNumber === 0) {
    return (
      <>
        <MyPageMenu updatePageNumber={setPageNumber} />
        <MyRestaurant />
      </>
    );
  } else if (pageNumber === 1) {
    return (
      <>
        <MyPageMenu updatePageNumber={setPageNumber} />
        <MyFavoriteRestaurant />
      </>
    );
  } else if (pageNumber === 2) {
    return (
      <>
        <MyPageMenu updatePageNumber={setPageNumber} />
        <MyEditProfile />
      </>
    );
  }
};

export default MyPage;
