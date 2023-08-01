import {useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";

export default function Logout(){
    return redirect("/");
}