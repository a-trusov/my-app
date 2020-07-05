import React from "react";
import style from './Post.module.css'
import ava from "../../ava.png";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={ava} className="ava-logo" alt="ava" />
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;