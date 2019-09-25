import React from 'react'
import Slider from '../Intro/Slider';
import Nyhed from '../Nyheder/Nyhed';
import NyhedTemplet from '../Nyheder/NyhedTemplet'
import Aktiviteter from '../Aktiviteter/Aktiviteter';
import DKC from '../Outro/DKC';
import Instagram from '../Outro/Instagram';
import Nyhedsbrev from '../Outro/Nyhedsbrev';
import Footer from '../Footer/Footer';


const Home = (props) => {
    return (
        <div>
            <div className="container">
                <Slider />
                <Nyhed />
                <Aktiviteter />
                <DKC />
                <div className="container d-flex outro">
                    <Instagram />
                    <Nyhedsbrev />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;