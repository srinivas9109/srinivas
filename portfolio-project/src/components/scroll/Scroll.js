import React, { useEffect, useState } from "react";
import './Scroll.css'
import {useWindowScroll} from 'react-use'

export default function Scroll(){
    const {y:pageOffset}=useWindowScroll();
    const[visible,setVisible]=useState(false);

    useEffect(()=>{
        if(pageOffset > 350){
            setVisible(true)
        }else{
            setVisible(false)

        }
    },[pageOffset])

    const scrollToTop=()=>{
        window.scrollTo({top : 0, behavior :"smooth"})
    }

    if(!visible){
        return false
    }
    return(
        <div className="scroll-to-top cursor-pointer text-center" >
            <i className="icon fas fa-chevron-up" onClick={scrollToTop}></i>

        </div>
    )
}