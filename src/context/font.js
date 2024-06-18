"use client"
import { Children, createContext, useRef, useState } from "react";

export const Font=createContext(null);
export const Fontwrapper=({children})=>{
    const [stroke,setstroke]=useState("#1e1e1e");
    const [background,setbackground]=useState("#1e1e1e");
    const [strokewidth,setstrokewidth]=useState(5);
    const [fontsize,setfontsize]=useState(10);
    const [opacity,setopacity]=useState(0);
    const [style,setstyle]=useState(false);
    
    return(
        <Font.Provider value={{stroke,setstroke,background,setbackground,strokewidth,setstrokewidth,fontsize,setfontsize,opacity,setopacity,style,setstyle}}>{children}</Font.Provider>
    )
}