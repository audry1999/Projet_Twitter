import search from "../assets/Icons/Search.svg"
import "./Trend.css"
// import "../assets/Icons/m"
// import Folow from "./Folow"


export function Input() {
    return (

        <div className="seach">
            <img src={search} alt="search" className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />

        </div>
    )

}
export function ForYou() {
    return (
        <div className="forYou">
            <div>
            <h2>Trends for you</h2>
            </div>

            <div className="trend">
                <p>Trending in Turkey</p>
                <h2>#SQUID</h2>
                <p>2,066 Tweets</p>
            </div>
            <div className="trend">
                <p>Trending in Turkey</p>
                <h2>#SQUID</h2>
                <p>2,066 Tweets</p>
            </div>
            <div className="trend">
                <p>Trending in Turkey</p>
                <h2>#SQUID</h2>
                <p>2,066 Tweets</p>
            </div>
           
            <div className="trend">
              <h3>Show more</h3>
              
            </div>
        </div>
    )
}


export default function Trend() {
    return (<div>
        <Input />
        <ForYou />
        {/* <Folow /> */}

    </div>
    )
}

