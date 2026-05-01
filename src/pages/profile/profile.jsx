import "./profile.css";
import Topbar from "./../../components/topbar/topbar";
import Sidebar from "./../../components/sidebar/sidebar";
import Feed from "./../../components/feed/feed";
import Rightbar from "./../../components/rightbar/rightbar";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/pexels-nevtug-491138436-16721650.jpg"
                alt=""
                
              />
              <img
                className="profileUserImg"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=remzi"
                alt=""
            
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Remzi Furkan</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </div>
  );
}
