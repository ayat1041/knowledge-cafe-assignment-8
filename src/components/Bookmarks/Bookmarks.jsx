import "./Bookmarks.css"
import React from 'react';

const Bookmarks = (props) => {
    const {bookmarkCount} = props; 
    return (
        <div className="bookmarks__container">
            <h2 className="heading">Bookmarked Blogs : {bookmarkCount}</h2>
            <div className="titles"><h1>Master Microsoft Power Platform and Become an In-Demand!</h1></div>
        </div>
    );
};

export default Bookmarks;