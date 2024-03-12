import { Link } from "react-router-dom"
import Twitter from '../../assets/Icons/Twitter.svg'
import Homefill from '../../assets/Icons/Home-Fill.svg'
import Explore from '../../assets/Icons/Explore.svg'
import Notification from '../../assets/Icons/Notifications.svg'
import Message from './../../assets/Icons/Messages.svg'
import Bookmarks from '../../assets/Icons/Bookmarks.svg'
import List from '../../assets/Icons/Lists.svg'
import ProfilFile from '../../assets/Icons/Profile-Fill.svg'
import More from '../../assets/Icons/More.svg'
import Button from '../../assets/Icons/Tweet-Buton-M.svg'


export default function SideBare(props) {
    console.log(props);
    return (
   
                <div className="menu">
                    <ul>
                        <li>
                        <img src={Twitter} />
                        </li>

                        <li>
                            <img src={Homefill} /> <Link to="/">Home</Link>
                           
                         
                        </li> 
                      <li>
                            <img src={Explore} /> 
                            <Link to="/contact">Explore</Link>
 
                        </li>
                        <li> 
                            <img src={Notification} /> 
                            <Link to="/contact">Notification</Link>
 
                        </li>
                        <li>
                            <img src={Message} />
                            <Link to="/contact">Message</Link>

                        </li>
                        <li>
                            <img src={Bookmarks} /> 
                            <Link to="/contact">Bookmarks</Link>

                        </li>
                        <li>
                            <img src={List} /> 
                            <Link to="/contact">Lists</Link>

                        </li>
                        <li>
                            <img src={ProfilFile} /> 
                            <Link to="/contact">Profile</Link>

                        </li>
                        <li>
                            <img src={More} /> 
                            <Link to="/contact">More</Link>

                        </li>

                        <img src={Button} />

                    </ul>
                </div>
            
    )

}