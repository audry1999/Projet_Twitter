import TweetAction from "../TweetAction";
import  reply from "../../../assets/Icons/Reply.svg"

export default function TweetActions (props){
console.log(props.action);
    return (
        <div className="tweet-actions">
           <TweetAction act={props.action.action1} image={reply}/>
           <TweetAction act={props.action.action1} image={reply}/>
           <TweetAction act={props.action.action1} image={reply}/>
           <TweetAction act={props.action.action1} image={reply}/>
          
        </div>
    )
}