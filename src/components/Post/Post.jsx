import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

const Post = (props) => {
  const { id, image, author_image, title, author_name, date, duration, tags } =
    props.post;
  const {bookmarkPost,timeSpent} = props;
  return (
    <div className="post">
      <img src={image} />
      <div className="post__info">
        <div className="author__info__container">
          <img src={author_image} />
          <div className="post__info__author">
            <h1 className="author_name">{author_name}</h1>
            <h4 className="posted_date">{date}</h4>
          </div>
        </div>
        <h4 className="post__info--read">
          {duration} min read<span onClick={()=>{bookmarkPost(id,title)}}><FontAwesomeIcon icon={faBookmark} /></span>
        </h4>
      </div>
      <h1 className="post--title">{title}</h1>
      <div className="tag">
        {tags.map((tag) => (
          <h6>#{tag}</h6>
        ))}
      </div>
      <a onClick={()=>{timeSpent(duration)}}>Mark as read</a>
    </div>
  );
};

export default Post;
