import React from 'react'
import styles from '../styles/Landing.module.scss'
import LandingSlider from './LandingSlider'
import sliderData from '../data/sliderData.json';

function Landing() {
    return (
        <div>
          <LandingSlider slides={sliderData}/>
        </div>
    )
}

export default Landing