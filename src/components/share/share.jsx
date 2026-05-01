import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=remzi"
            alt=""
            className="shareProfileImg"
          />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>

              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>

              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>

              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          <button className="sharebtn">Share</button>
        </div>
      </div>
    </div>
  );
}
