import React from "react";

export type LoadingType={
loading: string
}
const Preloader=(props:LoadingType)=>{
    return    <img src={props.loading}/>
}
export default Preloader