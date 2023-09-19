import Link from "next/link";
import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../login";
import Home from "..";

export default function Logout() {
  // localStorage.removeItem("token");
  //
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }

  return <></>;
}
