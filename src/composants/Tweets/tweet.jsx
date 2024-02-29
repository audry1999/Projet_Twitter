import TweetAvatar from "../Tweets/TweetAvatar";
import TweetContent from "../Tweets/TweetContent/TweetContent";

export default function Tweet (props){

  console.log(props);
    return (
        <div className="tweet">
            <TweetAvatar />
            <TweetContent />
        </div>
    )
}