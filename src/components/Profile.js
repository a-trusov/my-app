import React from "react";
import picture from "../image.jpg";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src={picture} className="App-picture" alt="pic" />
            </div>
            <div>
                ava +descriptions
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>k
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;