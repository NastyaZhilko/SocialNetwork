import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/post'
import {ProfilePageType} from "../../../Redux/profile_reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLength2, required} from "../../../Utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";


type MyPostsType = {
    profilePage: ProfilePageType
    addPostCallback: (newPostText: string) => void

}

const MyPosts = React.memo((props: MyPostsType) => {
    let postElements =
        props.profilePage.posts.map(p => <Post id={p.id} message={p.message} howManyLikes={p.howManyLikes}/>)

    const addNewPost = (value:any) => {
        props.addPostCallback(value.newPostText)
    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div className={s.nav}>
            <AddPostReduxForm onSubmit={addNewPost}/>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
})

type FormDataType = {
    newPostText: string
}
const maxLength10=maxLengthCreator(10)
const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={Textarea} placeholder={'Post message'}
                validate={[required, maxLength10, minLength2]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddPostForm)

export default MyPosts;
