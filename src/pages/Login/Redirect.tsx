import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React from "react";

const Redirect = ({ updateNickName, updateIsToken }) => {
  const navigator = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();
  /*
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port;

  const currentUrl = `${protocol}//${hostname}:${port}`;
*/
  useEffect(() => {
    const getCode = async () => {
      await axios
        .post("https://hansol.lhenry0.com/auth/social/kakao", {
          authorizationCode: searchParams.get("code"),
        })
        .then(function (res) {
          console.log(res);

          const token = res.headers.token;
          const nickName = res.data.data.nickName;

          localStorage.setItem("token", token);

          updateNickName(nickName);
          updateIsToken(true);

          navigator("/");
        })
        .catch(function (err) {
          if (err.response.status === 422) {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("회원가입되지 않으셨습니다. 회원가입 하시겠습니까?")) {
              const email = err.response.data.request.email;
              const tempnickname = err.response.data.request.nickName;

              navigator(`/signup?email=${email}&nickname=${tempnickname}`);
            } else {
              navigator("/login");
            }
          }
        });
    };

    getCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1>KaKao Redirecting Page</h1>;
};

export default Redirect;
