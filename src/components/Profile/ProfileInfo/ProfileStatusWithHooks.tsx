import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ProfileStatusWithHooks.module.css'
type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}


export const ProfileStatusWithHooks = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const acivateEditMode = () => {
        setEditMode(true)
    }

    const deacivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.profileStatus}>
            {!editMode &&
            <div>
               <b>Status:</b> <span onClick={acivateEditMode}>{props.status || 'My status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deacivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;
