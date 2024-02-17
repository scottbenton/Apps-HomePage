import React from "react";
import { useCurrentUser } from "auth_ui/useCurrentUser";
import { Link } from "react-router-dom";

export function LoginSection() {
  const { loading, user } = useCurrentUser();
  if (loading) {
    return null;
  } else if (user) {
    if (user.email) {
      return (
        <div className={"flex flex-col px-4 py-1 border rounded-xl"}>
          <span className={"text-xs font-semibold text-gray-600"}>
            Logged in as
          </span>
          <span className={"text-gray-800"}>{user.email ?? "Loading..."}</span>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return (
      <Link
        to={"/auth"}
        className={
          "bg-home-700 text-white px-4 py-2 font-bold rounded-xl hover:bg-home-800 focus:ring-2 ring-home-400 focus:outline-none transition-colors duration-300 ease-in-out"
        }
      >
        Log In
      </Link>
    );
  }
}
