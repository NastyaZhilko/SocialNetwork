import loading from '../../../assets/preloader.gif'

import React from "react";
export type LoadingType={
loading: string
}
let Preloader=(props:LoadingType)=>{
    return    <img src={props.loading}/>
}
export default Preloader