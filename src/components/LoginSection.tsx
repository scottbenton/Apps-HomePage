import React from "react";
import { useCurrentUser } from "auth_ui/useCurrentUser";
import { Link } from "react-router-dom";

export function LoginSection() {
  const { loading, user } = useCurrentUser();
  if (loading) {
    return <span>Loading</span>;
  } else if (user) {
    return <span>Logged in</span>;
  } else {
    return <Link to={"/auth"}>Log In</Link>;
  }
}
