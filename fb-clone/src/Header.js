import React from "react";

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import logo from "./images/logo.png";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import IconButton from "@mui/material/IconButton";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="image"></img>
        <div className="header__input">
          <SearchIcon className="search" />
          <input placeholder="Search Facebook" type="text"></input>
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleOutlinedIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Trien le</h4>
        </div>
        <IconButton>
          <AddOutlinedIcon />
        </IconButton>
        <IconButton>
          <ForumOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveOutlinedIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
