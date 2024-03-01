export default function TweetTitleDetails (props){
    return <span className="tweet-title-details">
        {props.TweetTit.details}
        {props.TweetTit.details2}
        {props.TweetTit.details3}
    </span>
}