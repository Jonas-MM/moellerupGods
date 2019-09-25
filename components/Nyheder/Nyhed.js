import React, {useState} from 'react'
import NyhedTemplet from './NyhedTemplet' 
import Nyhedcss from './Nyhedcss.css'




const Nyhed = () => {
    const [nyheder] = useState([
    { nyhedImg: "/Nyheder/verdensballet.jfif", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" },
    { nyhedImg: "/Nyheder/produkter.png", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" },
    { nyhedImg: "/Nyheder/ballet.png", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" },
    { nyhedImg: "/Nyheder/gods.png", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" }
    
    ]);
    
    // console.log(props.nyhedProp)
    let nyhedList = nyheder.map(
        n => {
            return (
                <NyhedTemplet nyhed={n} />
            );
        }
    )

    return (
            <div className="Nyhed container">
                <div className="alleNyhedder text-left">
                    {nyhedList}
                </div>
            </div>

    );
}

export default Nyhed;