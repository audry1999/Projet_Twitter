
import TweetImage from "../TweetBody/TweetImage";
import TweetText from "../TweetBody/TweetText";
import TweetTitle from "../TweetBody/TweetTitle";

export default function TweetBoby (props){

  return (
    <div className="tweet-body">
      
    
      <TweetTitle titre={props.body.title}/>
      <TweetText texte={props.body.text}/>
      <TweetImage image={props.body.image} />

    </div>
  )
}