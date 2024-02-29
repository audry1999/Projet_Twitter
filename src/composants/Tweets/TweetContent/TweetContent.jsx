import TweetActions from '../TweetContent/TweetActions';
import TweetBoby from '../../../composants/Tweets/TweetContent/TweetBody/TweetBody';

export default function TweetContent (){
    return (
        <div className="tweet-content">
            <TweetBoby/>
            <TweetActions />
            
        </div>
    )
}