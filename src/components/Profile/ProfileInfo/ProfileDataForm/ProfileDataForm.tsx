import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import style from "../../../common/FormControls/FormControls.module.css"
import {Contact} from "../ProfileInfo/ProfileInfo";
import {ContactsType, ProfileType} from "../../../../Redux/profile_reducer";
import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import {InjectedFormProps, reduxForm} from "redux-form";

export type ProfileDataFormPropsType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType>
    = ({profile, handleSubmit, error}) => {
    return (
        <form className={s.description} onSubmit={handleSubmit}>
            <div className={s.item}>
                <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
            </div>

            <div className={s.item}>
                <b>Looking for a lob:</b>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div className={s.item}>
                <b>My professional skills:</b>
                {createField('My professional skills',
                    'lookingForAJobDescription', [], Textarea)}
            </div>
            <div className={s.item}>
                <b>About me:</b>
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div className={s.item}>
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}:</b>{createField(key, 'contacts.' + key, [], Textarea)}
                    </div>

                }
            )}
            </div>
            <div className={s.edit}>
                <button onClick={() => {
                }}>Save
                </button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>
({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm