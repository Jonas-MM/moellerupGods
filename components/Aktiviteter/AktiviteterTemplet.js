import React from 'react';

const AktiviteterTemplet = ({aktivitet}) => {
    return (

        <div>
            <img src={"/img/" + aktivitet.aktiviteterImg} alt="aktivitetImg" />
            <h4>{aktivitet.aktiviteterOverskrift}</h4>
            <p>{aktivitet.aktivitetertxt}</p>
            <a href="#">Se mere</a>

        </div>


    )
}
export default AktiviteterTemplet;


