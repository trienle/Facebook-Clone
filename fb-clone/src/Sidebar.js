import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import EmojiFlagsOutlinedIcon from "@mui/icons-material/EmojiFlagsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        title="Trienle"
      />
      <SidebarRow
        Icon={LocalHospitalOutlinedIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsOutlinedIcon} title="Pages" />
      <SidebarRow Icon={PeopleAltOutlinedIcon} title="Friends" />
      <SidebarRow Icon={ChatBubbleOutlineOutlinedIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontOutlinedIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Video" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar