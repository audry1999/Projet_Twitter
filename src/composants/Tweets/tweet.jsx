import TweetAvatar from "../Tweets/TweetAvatar";
import TweetContent from "../Tweets/TweetContent/TweetContent";

export default function Tweet (props){

  
    return (
        <div className="tweet">
            <TweetAvatar avatarphoto={props.tableau.logo}/>
            <TweetContent contenutweet={props.tableau.content}/>
        </div>
    )
}