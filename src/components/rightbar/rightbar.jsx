import "./rightbar.css";
import { Users } from "./../sidebar/dummyData";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="assets/pexels-gabby-k-5708964.jpg"
            alt=""
          />
          <span className="birthdayText">
            <b>John Doe</b> and <b>2 others</b> have a birthday today!
          </span>
        </div>

        <img
          className="righbarAd"
          src="assets/pexels-harry-ho-706155100-18154798.jpg"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>

        {Users.slice(1, 6).map((user, key) => (
          <ul className="rightbarFriendList" key={user.id}>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                  alt=""
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUserName">{user.name}</span>
            </li>
          </ul>
        ))}
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Lives in:</span>
            <span className="rightbarInfoValue">Los Angeles</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Works at:</span>
            <span className="rightbarInfoValue">Google</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Followers:</span>
            <span className="rightbarInfoValue">100</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Followings:</span>
            <span className="rightbarInfoValue">100</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.slice(1, 7).map((user) => (
            <ul className="rightbarFollowingList" key={user.id}>
              <li className="rightbarFollowing">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{user.name}</span>
              </li>
            </ul>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
