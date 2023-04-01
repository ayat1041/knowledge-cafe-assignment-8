import Bookmarks from '../Bookmarks/Bookmarks';
import Post from '../Post/Post';
import SpentTime from '../SpentTime/SpentTime';
import './Dashboard.css';
import React, { useEffect, useState } from 'react';
// import React from 'react';
const Dashboard = () => {
    const [bookmarkCount,setbookmarkCount] = useState(0);
    const [bookmark,setBookmark] = useState([]);
    const bookmarkPost = (id,title) => {
        setbookmarkCount(bookmarkCount+1)
        let newArr = [...bookmark,title];
        setBookmark(newArr);
        console.log(bookmark);
    }
    const [spentTime,setspentTime] = useState(0);
    const timeSpent = (duration) => {
        setspentTime(spentTime+duration)
    }
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
                posts.map(post => <Post key={post.id} post={post} bookmarkPost={bookmarkPost} timeSpent={timeSpent}></Post>)
            }
            </div>
            <div className="cart">
                <SpentTime spentTime={spentTime}></SpentTime>
                <Bookmarks bookmarkCount={bookmarkCount} bookmark={bookmark}></Bookmarks>
            </div>
        </div>
    );
};

export default Dashboard;