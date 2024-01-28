import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useLayoutEffect } from "react";

const Redirect = ({ updateIsToken }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();

  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const currentUrl = `${protocol}//${hostname}:${port}`;

  useLayoutEffect(() => {
    const getCode = async () => {
      await axios
        .post("https://hansol.lhenry0.com/auth/social/kakao", {
          authorizationCode: searchParams.get("code"),
        })
        .then(function (res) {
          console.log(res);

          const item = {
            token: res.headers.token,
            nickName: res.data.data.nickName,
          };

          localStorage.setItem("token", JSON.stringify(item));

          updateIsToken(true);

          window.location.href = currentUrl;
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    getCode();
  }, [currentUrl, updateIsToken, searchParams]);
};

export default Redirect;
