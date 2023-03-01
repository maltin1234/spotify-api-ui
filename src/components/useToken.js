import { useState, useEffect } from "react";

export default function useToken() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let newToken = window.localStorage.getItem("token");

    if (!newToken && hash) {
      newToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", newToken);
    }

    setToken(newToken || "");
  }, [token]);

  return [token, setToken];
}
