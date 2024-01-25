import MyPageMenu from "./MyPageMenu";
import MyRestaurant from "./MyRestaurant";
import MyFavoriteRestaurant from "./MyFavoriteRestaurant";
import MyEditProfile from "./MyEditProfile";
import { useParams } from "react-router-dom";

const MyPage = () => {
  const { pagenumber } = useParams();

  if (pagenumber === "0") {
    return (
      <>
        <MyPageMenu />
        <MyRestaurant />
      </>
    );
  } else if (pagenumber === "1") {
    return (
      <>
        <MyPageMenu />
        <MyFavoriteRestaurant />
      </>
    );
  } else if (pagenumber === "2") {
    return (
      <>
        <MyPageMenu />
        <MyEditProfile />
      </>
    );
  }
};

export default MyPage;
