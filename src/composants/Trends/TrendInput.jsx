import search from "../../assets/Icons/Search.svg"
export default function TrendInput(){
    return(
        <div className="seach">
            <img src={search} alt="search" className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />

        </div>
        )
}