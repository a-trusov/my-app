import React from "react";
import picture from "../../image.jpg";
import style from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src={picture} className="App-picture" alt="pic" />
            </div>
            <div>
                ava +descriptions
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;