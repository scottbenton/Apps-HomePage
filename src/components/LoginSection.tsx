import React, { useContext } from "react";
import { UserContext } from "@scottbenton/apps-config";
import { Link } from "react-router-dom";

export function LoginSection() {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return <span>Loading</span>;
  } else if (user) {
    return <span>Logged in</span>;
  } else {
    return <Link to={"/auth"}>Log In</Link>;
  }
}
