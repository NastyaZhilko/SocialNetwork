import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../Utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import style from './../common/FormControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void

}
type MapStatePropsType = {
    isAuth: boolean
    captcha: string | null
}
type LoginFormOwnProps = {
    captcha: string | null
}
const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'}  name={'password'} component={Input} type="password"
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"
                /> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)
const Login: React.FC<MapDispatchPropsType & MapStatePropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
    </div>

}

const mapStateProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

// @ts-ignore
export default connect(mapStateProps, {login})(Login)
