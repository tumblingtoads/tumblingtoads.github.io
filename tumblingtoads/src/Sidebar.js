import travel from './blog/travel.json';
import React, { useState, useEffect } from 'react';
import './App.css';

function Sidebar(props) {
    const newData = travel.map((post) => {
        return (
            <div onClick={() => props.notifyParent(post)} key={post.name}>{post.name}</div>
        )
    });
    console.log(newData);
    return (
        <div className="sidebar">
            <h1>
                Tumbling Toads
            </h1>
            <div>
                {newData}
            </div>
        </div>
    );
    // return (
    //     <div className="Sidebar">
    //     This is a Sidebar

    //     </div>
    // );


}

export default Sidebar;
