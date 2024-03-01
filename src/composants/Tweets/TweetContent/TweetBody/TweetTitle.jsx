import TweetTitleAuthor from "../../TweetTitleAuthor";
import TweetTitleDetails from "../../TweetTitleDetails";
import verified from "../../../../assets/Icons/Verified.svg"
export default function TweetTitle(props) {
  return (
    <div className="tweet-title">
      <TweetTitleAuthor TweetTitl={props.titre}/>
       <img src={verified} />
      <TweetTitleDetails TweetTit={props.titre} />
    </div>
  );
}
