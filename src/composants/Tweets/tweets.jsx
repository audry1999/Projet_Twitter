import Tweet from '../Tweets/tweet';
import {Data} from "../Data/Data"

export default function Tweets (){
    return (<div className="tweets">
       
       {Data.map(element=>(<Tweet key={element.id} tableau={element}/>))}
    </div>)}