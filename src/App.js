import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueInfo from './components/Venue info/VenueInfo'
import Highlight from './components/Highlights/index'
import Pricing from './components/pricing/index'
import Location from './components/location/index'
import Footer from './components/header_footer/Footer'
import {Element} from 'react-scroll'



class App extends Component {




  render() {
    return (
      <div className='App' style={{height:'1500px', background:'cornflowerblue'}} >
        <Header/>

        <Element name='featured'>
          <Featured/>
        </Element>

        <Element name='venueInfo'>
          <VenueInfo/>
        </Element>
        

        <Element name='highlight'>
          <Highlight/>
        </Element>

        <Element name='pricing'>
          <Pricing/>
        </Element>

        <Element name='location'>
          <Location/>
        </Element>

        <Footer/>
      </div>
    );
  }
}

export default App;