"use client"
import { useContext } from "react";
import { User } from "@/context";

 const Tim=()=>{
    const {t}=useContext(User)
    return <div>sdsg{t}</div>
}
export default Tim