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
import SideBareProfil from './SideBareProfile'
import Button from '../buttons/Buttons'
import SideBareAction from './SideBareAction'

export default function SideBare() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">

                <SideBareAction
                    sourceImg={Twitter}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={Homefill}
                    texte={"Home"}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={Explore}
                    texte={"Explore"}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={Notification}
                    texte={"Notification"}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={Message}
                    texte={"Message"}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={Bookmarks}
                    texte={"Bookmarks"}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={List}
                    texte={"List"}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={ProfilFile}
                    texte={"Profil"}
                    lien="/"
                />
                <SideBareAction
                    sourceImg={More}
                    texte={"More"}
                    lien="/"
                />
                <Button />
            </div>
            <SideBareProfil
                profilPhoto={Profil}
                privatePhoto={Private}
            />

        </div>
    )
}


