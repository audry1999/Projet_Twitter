 import ForyouContent from "./ForyouContent"
// import SousTitre from "./SousTitre"
// import TrendTitle from "./TrendTitle"
import SousTitre from "./SousTitre"




export default function ForYous() {
    return (
        <div className="forYou">
            <div>
               <h2>Trend for you</h2>
            </div>
            <div className="trend">
                <ForyouContent />
            </div>
            <div className="trend">
            <ForyouContent />
            </div>
            <div className="trend">
            <ForyouContent />
            </div>

            <div className="trend">
                <SousTitre/>

            </div>
        </div>
    )
}