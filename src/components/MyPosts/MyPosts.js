import React from "react";
import style from './MyPosts.module.css'
import Post from "../Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div className={style.item}>
                    <textarea/>
                    <button>Add post</button>
                </div>
                <div className='posts' >
                    <Post message='Post1'/>
                    <Post message='Post2'/>
                    <Post message='Post3'/>
                    <Post message='Post4'/>
                </div>
            </div>
    );
}

export default MyPosts;