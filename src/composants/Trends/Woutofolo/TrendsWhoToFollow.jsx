import time from "../../../assets/images/times.png"
import tgg from '../../../assets/images/cnn.png'
import Tweet from '../../../assets/images/twitter-logo.png'
import twetTex from '../../../assets/Icons/Teeter pr.png'
// import verifie from '../../../assets/Icons/Verified.svg'
import Acount from '../../../assets/Icons/Accaount.png'
import btn from "../../../assets/Icons/Btn.png"
import Cnn from "../../../assets/Icons/cnn pr.png"
export default function TrendsWhoToFollow() {
   return (
      <div className="forYou">

         <div className="ToFolow">
            <div className="Tof-text">
               <div><i><img src={time} alt="" /></i></div>
               {/* <div>The new york time <span><img src={verifie} alt="" /></span></div> */}
               <div><img src={Acount} alt="" /></div>
            </div>
            <div><img src={btn} alt="" /></div>
         </div>
         <div className="ToFolow">
            <div className="Tof-text">
               <div><i><img src={tgg} alt="" /></i></div>
               {/* <div>The new york time <span><img src={verifie} alt="" /></span></div> */}
               <div><img src={Cnn} alt="" /></div>
            </div>
            <div><img src={btn} alt="" /></div>
         </div>
         <div className="ToFolow">
            <div className="Tof-text">
               <div><i><img src={Tweet} alt="" /></i></div>
               {/* <div>The new york time <span><img src={verifie} alt="" /></span></div> */}
               <div><img src={twetTex} alt="" /></div>
            </div>
            <div><img src={btn} alt="" /></div>
         </div>

      </div>
   )
}