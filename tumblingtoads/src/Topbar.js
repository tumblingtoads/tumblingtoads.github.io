import React, { useState, useEffect } from 'react';
import './App.css';

function Topbar(props) {
    const [currentPost, setCurrentPost] = useState(null);
    const newData = props.posts.map((post) => {
        return (
            <div onClick={() => props.notifyParent(post)} key={post.name}>{post.name}</div>
        )
    });

    useEffect(() => {
        //if (currentPost == null)
        //   setCurrentPost(props.posts[0])
    })

    return (
        <div className="topbar">
            <h2 className='site-title'>
                Tumbling Toads
            </h2>
            <div className='dropdown'>
                <h3>
                    Trips
                </h3>
                <div className='dropdown-content'>
                    {newData}
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="Sidebar">
    //     This is a Sidebar

    //     </div>
    // );
}

export default Topbar;
