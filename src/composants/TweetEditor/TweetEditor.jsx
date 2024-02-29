import Avatar from "../TweetEditor/avatar";
import TweetEditorForm from "./TweetEditorForm/tweet-editor-form"

export default function TweetEditor () {
     return <div className="tweet-editor"> 
          <Avatar/>
          <TweetEditorForm/>
     </div>
}