import "./sidebar.css";
import { Users } from "./dummyData";
import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  Event,
  School,
  HelpCenterRounded,
  WorkOutlineRounded,
} from "@mui/icons-material";
import { sidebarData } from "./dummyData";

export default function Sidebar() {
  
  const iconMap = {
    RssFeed: RssFeed,
    Chat: Chat,
    PlayCircleFilled: PlayCircleFilled,
    Group: Group,
    Bookmark: Bookmark,
    HelpCenterRounded: HelpCenterRounded,
    WorkOutlineRounded: WorkOutlineRounded,
    Event: Event,
    School: School,
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {sidebarData.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <li className="sidebarListItem" key={index}>
                {Icon && <Icon className="sidebarIcon" />}
                <span className="sidebarListItemText">{item.text}</span>
              </li>
            );
          })}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <ul className="sidebarFriendList">
            {Users.map((user,key) => (
              <li className="sidebarFriend" key={user.id}>
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                  alt=""
                  className="sidebarFriendImg"
                />
                <span className="sidebarFriendName">{user.name}</span>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}
