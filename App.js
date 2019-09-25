import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import Slider from './components/Intro/Slider';
import Nyhed from './components/Nyheder/Nyhed';
import NyhedTemplet from './components/Nyheder/NyhedTemplet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Aktiviteter from './components/Aktiviteter/Aktiviteter';
import Home from './components/Home/Home';


function App() {

  // const [nyheder] = useState([
  //   { nyhedImg: "/Nyheder/verdensballet.jfif", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" },
  //   { nyhedImg: "/Nyheder/produkter.png", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" },
  //   { nyhedImg: "/Nyheder/ballet.png", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" },
  //   { nyhedImg: "/Nyheder/gods.png", nyhedOverskrift: "Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften", nyhedtxt: "Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020" }

  // ]);

  // const [aktiviteter] = useState([
  //   { aktivitetImg: "/hamp.jpg", aktiviteterOverskrift: "hej", aktivitetertxt: "123333" },
  //   { aktivitetImg: "/hamp", aktiviteterOverskrift: "hej", aktivitetertxt: "123333" },
  //   { aktivitetImg: "/hamp", aktiviteterOverskrift: "hej", aktivitetertxt: "123333" },
  //   { aktivitetImg: "/hamp", aktiviteterOverskrift: "hej", aktivitetertxt: "123333" }

  // ]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
 
        <Route path="/home" component={Home} />
        <Route path="/nyhed" component={Nyhed} />
        <Route path="/aktiviteter" component={Aktiviteter} />
      </div>
    </BrowserRouter>
  );
}

{/* <Route path="/event" component={Event} />
  <Route path="/shop" component={() => <Shop shoeListProp={sko} />} /> */}

export default App;
