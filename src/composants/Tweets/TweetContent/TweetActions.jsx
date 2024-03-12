import TweetAction from "../TweetAction";
import  reply from "../../../assets/Icons/Reply.svg"
import Retweet from "../../../assets/Icons/Retweet.svg"
import Share from "../../../assets/Icons/Share.svg"
// import React from "../../../assets/Icons/"

export default function TweetActions (props){
console.log(props.action);
    return (
        <div className="tweet-actions">
           <TweetAction act={props.action.action1} image={reply}/>
           <TweetAction act={props.action.action2} image={Retweet}/>
           <TweetAction act={props.action.action1} image={reply}/>
           <TweetAction act={props.action.action4} image={Share}/>
          
        </div>
    )
}