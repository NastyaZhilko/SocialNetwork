import React from "react";
import s from './post.module.css'
import {PostType} from "../../../../Redux/profile_reducer";


const Post = (props: PostType) => {
    return (

        <div className={s.item}>
            <img
                src="https://vignette.wikia.nocookie.net/lisenot/images/2/25/.jpg/revision/latest/scale-to-width-down/340?cb=20150514143502&path-prefix=ru"/>
            {props.message}
            <div>
                <span>like</span> {props.howManyLikes}
            </div>
        </div>
    )
}
export default Post;
