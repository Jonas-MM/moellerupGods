import React, { useState } from 'react'
import AktiviteterTemplet from './AktiviteterTemplet'
import Aktivitetercss from './Aktivitetercss.css'




const Aktiviteter = () => {

    const [aktiviteter] = useState([
        { aktiviteterImg: "Artikel/hamp.jpg", aktiviteterOverskrift: "Møllerup Hamp", aktivitetertxt: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje" },
        { aktiviteterImg: "Artikel/Fest.jfif", aktiviteterOverskrift: "Møder & events", aktivitetertxt: "Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet." },
        { aktiviteterImg: "Artikel/Fest2.jfif", aktiviteterOverskrift: "Fest på kroen", aktivitetertxt: "Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer." },
        { aktiviteterImg: "Artikel/Rundvisning.jpg", aktiviteterOverskrift: "Rundvisninger", aktivitetertxt: "Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup. " },
        { aktiviteterImg: "Artikel/Hudpleje.jpg", aktiviteterOverskrift: "Hamp hudpleje", aktivitetertxt: "Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø." },
        { aktiviteterImg: "Artikel/Banner.jpg", aktiviteterOverskrift: "Hamp fødevarer", aktivitetertxt: "Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup. " },
        { aktiviteterImg: "Artikel/hus.png", aktiviteterOverskrift: "Møllerup bogen", aktivitetertxt: "Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. " },
        { aktiviteterImg: "Artikel/Kvinde.jpg", aktiviteterOverskrift: "Møllerup jagt", aktivitetertxt: "Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt." },
        { aktiviteterImg: "Artikel/heste.jfif", aktiviteterOverskrift: "Ferie for 40", aktivitetertxt: "Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool" },

    ]);

    let aktivitetList = aktiviteter.map(
        n => {
            return (
                <AktiviteterTemplet aktivitet={n} />
            );
        }
    )

    return (
        <div className="container">
            <div className="hr">
                <hr />
                <h1>Møllerup Gods tilbyder en perlerække af muligheder</h1>
                <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            </div>

            <div className="container alleAktiviteter">
                {aktivitetList}
            </div>
        </div>

    );
}

export default Aktiviteter;