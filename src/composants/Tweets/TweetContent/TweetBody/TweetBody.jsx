
import TweetImage from "../TweetBody/TweetImage";
import TweetText from "../TweetBody/TweetText";
import TweetTitle from "../TweetBody/TweetTitle";

export default function TweetBoby (){

  return (
    <div className="tweet-body">
    
      <TweetTitle />
      <TweetText />
      <TweetImage />
    </div>
  )
}