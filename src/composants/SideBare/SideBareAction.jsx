import { Link } from "react-router-dom"
export default function SideBareAction({sourceImg, texte, lien}) {
    return (
        <Link to={lien} >
            <div className='side-nav'>
                <img src={sourceImg} alt="" />
                <div className='page-title-sidebare'>{texte}</div>
            </div>
        </Link>
    )
}