import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Redirect = ({ updateIsToken }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();

  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const currentUrl = `${protocol}//${hostname}:${port}`;

  useEffect(() => {
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
          if (err.response.status === 422) {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("회원가입되지 않으셨습니다. 회원가입 하시겠습니까?")) {
              const email = err.response.data.request.email;
              const tempnickname = err.response.data.request.nickName;

              window.location.href = `${currentUrl}/signup?email=${email}&nickname=${tempnickname}`;
            } else {
              window.location.href = `${currentUrl}/login`;
            }
          }
        });
    };

    getCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
};

export default Redirect;
