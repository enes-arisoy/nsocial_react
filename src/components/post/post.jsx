import "./post.css";
import { MoreVert } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Users } from './../sidebar/dummyData';
import { useState } from "react";

export default function Post({post}) {
  const user = Users.find((user) => user.id === post.userId);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like -1 : like + 1);
    setIsLiked(!isLiked);
    
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
              alt="postImage"
            />
            <span className="postUserName">{user.name}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img
            className="postImg"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteBorderOutlinedIcon className="likeIcon" onClick={() => likeHandler()}/>
            <ThumbUpOutlinedIcon className="likeIcon" onClick={() => likeHandler()} /> 
            <span className="postLikeCounter">
               {like} people like it</span>
          </div>

          <div className="postBottomRight">
            <div className="postCommonText">{post.comment} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
