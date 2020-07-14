import React, { useEffect } from "react";
import authService from "../services/auth";

const Logout = () => {
  useEffect(() => {
    authService.logout();
    window.location = "/login";
  })
  return null;
}

export default Logout;
