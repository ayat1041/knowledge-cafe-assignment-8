import "./Bookmarks.css"
import React from 'react';

const Bookmarks = (props) => {
    const {bookmarkCount,bookmark} = props; 
    return (
        <div className="bookmarks__container">
            <h2 className="heading">Bookmarked Blogs : {bookmarkCount}</h2>
            {
                bookmark.map(one => <div className="titles"><h1>{one}</h1></div>)
            }
        </div>
    );
};

export default Bookmarks;