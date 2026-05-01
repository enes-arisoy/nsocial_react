import Share from "../share/share";
import "./feed.css";
import Post from "./../post/post";
import { Posts } from "../sidebar/dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((i) => (
          <Post key= {i.id} post={i} />
        ))}
      </div>
    </div>
  );
}
