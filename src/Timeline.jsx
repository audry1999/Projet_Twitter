import Header from "./composants/Header/header" 
import TweetEditor from "./composants/TweetEditor/TweetEditor"
import Tweets from "./composants/Tweets/tweets"


export default function Timeline (){

  return (
    <>
    <div className='timeline'>
      <Header />
      <TweetEditor/>
      <Tweets />
    </div>
    <div>
      
    </div>
    </>
  )
}
