import Bookmarks from '../Bookmarks/Bookmarks';
import Post from '../Post/Post';
import SpentTime from '../SpentTime/SpentTime';
import './Dashboard.css';
import React, { useEffect, useState } from 'react';
// import React from 'react';

const Dashboard = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=> res.json())
        .then(data=>setPosts(data))
    },[]);
    return (
        <div className="dashboard">
            <div className="products">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            </div>
            <div className="cart">
                <SpentTime></SpentTime>
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Dashboard;