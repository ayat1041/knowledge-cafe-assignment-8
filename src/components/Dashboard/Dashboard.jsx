import Bookmarks from "../Bookmarks/Bookmarks";
import Post from "../Post/Post";
import SpentTime from "../SpentTime/SpentTime";
import "./Dashboard.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import React from 'react';
const Dashboard = () => {
  const notify = () =>
    toast.warn("This post is already bookmarked!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const [bookmarkCount, setbookmarkCount] = useState(0);
  const [bookmark, setBookmark] = useState([]);
  const bookmarkPost = (title) => {
    setbookmarkCount(bookmarkCount + 1);
    let newArr = [title, ...bookmark];
    if (bookmark.includes(title)) {
      <span onClick={notify()}>toast</span>;
      console.log("already present");
    } else {
      console.log("new item");
    }
    setBookmark(newArr);
    // console.log(bookmark);
  };
  const [spentTime, setspentTime] = useState(0);
  const timeSpent = (duration) => {
    setspentTime(spentTime + duration);
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="products">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            bookmarkPost={bookmarkPost}
            timeSpent={timeSpent}
          ></Post>
        ))}
        <div className="qna">
          <h4>Props vs State - </h4>
          <p><b>Ans: </b>States are mutable where as props are immutable. Props are the values that was sent to the functional component from another parent component. Where states can be called and used inside a functional component itself.</p>
          <h4>How useState works ? </h4>
          <p><b>Ans: </b>useState takes two parameters - for example - count,setCount. We need to declare the initial value of count and we can change the value using setCount function.</p>
          <h4>What does useEffect do other than fetch</h4>
          <p><b>Ans: </b>apart from loading data useEffect is used to to conditionally terminate a task based on the given dependency.</p>
          <h4>How does React works ? </h4>
          <p><b>Ans: </b>React is a javascript library that divides any website into components thus making any project managable. it uses a virtual DOM for quick performance in updating data using diff algorithm.</p>
        </div>
      </div>
      <div className="cart">
        <SpentTime spentTime={spentTime}></SpentTime>
        <Bookmarks
          bookmarkCount={bookmarkCount}
          bookmark={bookmark}
        ></Bookmarks>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Dashboard;
