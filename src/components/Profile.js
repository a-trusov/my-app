import React from "react";
import picture from "../image.jpg";
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src={picture} className="App-picture" alt="pic" />
            </div>
            <div>
                ava +descriptions
            </div>
            <div>
                My posts
                <div className={style.item}>
                    New post
                </div>
                <div className='posts' >
                    <div  className={style.item}>
                        Post 1
                    </div>
                    <div  className={style.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;