// import { Form, Link } from "react-router-dom"
import { Link } from 'react-router-dom'
import Twitter from '../../assets/Icons/Twitter.svg'
import Homefill from '../../assets/Icons/Home-Fill.svg'
import Explore from '../../assets/Icons/Explore.svg'
import Notification from '../../assets/Icons/Notifications.svg'
import Message from './../../assets/Icons/Messages.svg'
import Bookmarks from '../../assets/Icons/Bookmarks.svg'
import List from '../../assets/Icons/Lists.svg'
import ProfilFile from '../../assets/Icons/Profile-Fill.svg'
import More from '../../assets/Icons/More.svg'
// import Button from '../../assets/Icons/Tweet-Buton-M.svg'
 import Profil from "../../assets/Profile-Photo.svg"
import Private from "../../assets/Icons/Private.svg"
import './SideBare.css'

export default function SideBare() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <Link to="/" />
                <img src={Twitter} alt="" />
                <Link />

                <Link to="/" />
                <div className='side-nav'>
                    <img src={Homefill} alt="" />
                    <div className='page-title-sidebare'>Home</div>
                </div>

                <Link />
                <Link to="/" />
                <div className='side-nav'>
                    <img src={Explore} alt="" />
                    <div className='page-title-sidebare'>Explore</div>
                </div>

                <Link />
                <Link to="/" />
                <div className='side-nav'>
                    <img src={Notification} alt="" />
                    <div className='page-title-sidebare'>Notification</div>
                </div>

                <Link />
                <Link to="/" />
                <div className='side-nav'>
                    <img src={Message} alt="" />
                    <div className='page-title-sidebare'>Message</div>
                </div>

                <Link />
                <Link to="/" />
                <div className='side-nav'>
                    <img src={Bookmarks} alt="" />
                    <div className='page-title-sidebare'>Bookmarks</div>
                </div>

                <Link />
                <Link to="/" />
                <div className='side-nav'>
                    <img src={List} alt="" />
                    <div className='page-title-sidebare'>List</div>
                </div>

                <Link />
                <Link to="/" />
                <div className='side-nav'>
                    <img src={ProfilFile} alt="" />
                    <div className='page-title-sidebare'>Profile</div>
                </div>

                <Link />
                <Link to="/" />
                <div className='side-nav'>
                    <img src={More} alt="" />
                    <div className='page-title-sidebare'>More</div>
                </div>
                <Link />
                <button style={{ width: "90%" }} className='button'>Tweet</button>
            </div>
            <div className='user'>
                <img src={Profil} alt="" />
            </div>
            <div className='content-footer'>
                Bradley Ortiz <span><img src={Private} alt="" /></span>
                <p>@Bradley</p>

            </div>

        </div>
    )
}


