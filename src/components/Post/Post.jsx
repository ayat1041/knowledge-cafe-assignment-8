import './Post.css';


const Post = (props) => {
    const {id,image,author_image,title,author_name,date,duration,tags} = props.post;
    return (
        <div className="post">
            <img src={image}/>
            <div className="post__info">
                <img src={author_image}/>
                <div className='post__info__author'>
                    <h1 className='author_name'>{author_name}</h1>
                    <h4 className=''></h4>
                </div>
            </div>
        </div>
    );
};

export default Post;