import React from 'react';
// import Nyhedcss from 'Nyhedcss.css'

const NyhedTemplet = ({nyhed}) => {
    return (

        <div>
            <img src={"/img/" + nyhed.nyhedImg} alt="nyhedImg" />
            <h4>{nyhed.nyhedOverskrift}</h4>
            <p>{nyhed.nyhedtxt}</p>
            <a href="#">Se mere</a>

        </div>


    )
}
export default NyhedTemplet;


