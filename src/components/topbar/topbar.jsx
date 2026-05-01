import {
  Chat,
  Notifications,
  Person,
  Search,
  PowerSettingsNew,
} from "@mui/icons-material";
import "./topbar.css";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span onClick={() => navigate("/")} className="logo">
          NSocial
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for post, video or friend"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <img
          onClick={() => navigate("/profile")}
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=remzi"
          alt=""
          className="profileImage"
        />

        <div>
          <PowerSettingsNew
            className="topbarIconItem"
            onClick={() => {
              navigate("/login");
            }}
          />
        </div>
      </div>
    </div>
  );
}
