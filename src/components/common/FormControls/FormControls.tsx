import React from "react";
import styles from "./FormControls.module.css";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlType={
    meta:WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlType> = ({meta:{touched, error},children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
   const {input, meta, ...restProps} = props
    return <FormControl {...props}>  <textarea {...input} {...restProps}/>
    </FormControl>

}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}