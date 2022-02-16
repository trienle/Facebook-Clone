import { Avatar } from "@material-ui/core";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import React from "react";
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Post = ({ profilePic, username, timestamp, image, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} atl=""></img>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comments</p>
        </div>
        <div className="post__option">
          <PresentToAllIcon />
          <p>Comments</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
