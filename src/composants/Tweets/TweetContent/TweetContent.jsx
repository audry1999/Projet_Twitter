import TweetActions from '../TweetContent/TweetActions';
import TweetBoby from '../../../composants/Tweets/TweetContent/TweetBody/TweetBody';

export default function TweetContent (props){
    
    return (
        <div className="tweet-content">
            <TweetBoby body={props.contenutweet.body}/>
            <TweetActions action={props.contenutweet.actions}/>
            
        </div>
    )
}