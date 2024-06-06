"use client"
import { useContext } from "react";
import { User } from "@/context";
import Canvas from "./componets/canvas";
export default function Home() {
  const {t}=useContext(User)
  return (
   <>
   {/* <div>{t}</div> */}
   <Canvas/>
   </>
  );
}
