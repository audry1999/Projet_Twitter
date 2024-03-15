
export default function TweetAction (props){
    return (
        <div className="tweet-action">
              <img src={props.image} />
           <span>{props.act}</span>
            
        </div>
    )
}