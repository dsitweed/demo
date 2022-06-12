import { Tooltip } from "@mui/material";
import React, { useState, useEffect } from "react";

function GoogleLogin() {
  const [success, setSuccess] = useState(false);

  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/google/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ code: response.credential }),
      }
    );
    console.log(res);
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      if (res.status === 200) {
        setSuccess(true);
      } else {
        if (res.status === 401) {
          setSuccess(false);
        }
      }
    }
  };

  useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", type: "icon" }
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <Tooltip title="Đăng nhập bằng google">
      <div id="buttonDiv" />
    </Tooltip>
  );
}

export default GoogleLogin;
