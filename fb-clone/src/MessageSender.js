import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import db from "./firebase";
import firebase from 'firebase'
import { useStateValue } from "./StateProvider";


const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
    const[{user},dispatch]=useStateValue()
  const handleSubmit = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username:user.displayName,
      image:imageUrl
    })


    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form className="messageSender__input">
          <input
            type="text"
            placeholder="Whats on your mind?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <input
            placeholder="image URL (Optionals)"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamOutlinedIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryOutlinedIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonOutlinedIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
