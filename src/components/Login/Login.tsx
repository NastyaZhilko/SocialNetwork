import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../Utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string)=>void

}
type MapStatePropsType={
    isAuth: boolean

}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'email'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} type="password" name={'password'} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'email'})(LoginForm)
const Login: React.FC<MapDispatchPropsType & MapStatePropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

const mapStateProps=(state:AppStateType):MapStatePropsType=>({
    isAuth: state.auth.isAuth
})
// @ts-ignore
export default connect(mapStateProps, {login})(Login)
