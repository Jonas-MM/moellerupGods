import React from 'react'
import reklame from '../../reklame.png'
import DKCcss from './DKCcss.css'

const DKC = () => {
    return (
        <div id="reklameContainer" className="container">
            <img className="d-block" src={reklame} alt="sponsor" />
            <a className="text-left" href="https://dkbs.dk/">Møllerup Gods er autoriseret partner hos Danske Konferencecentre</a>
        </div>
    );
}

export default DKC;