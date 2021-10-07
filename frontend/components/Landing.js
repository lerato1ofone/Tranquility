import React from 'react'
import styles from '../styles/Landing.module.scss'
import LandingSlider from './LandingSlider'
import sliderData from '../data/sliderData.json';
import WhatWeDo from './WhatWeDo';

function Landing() {
    return (
        <div>
          <LandingSlider slides={sliderData}/>
          <div className={styles['content-wrapper']}>
            <WhatWeDo />
          </div>
        </div>
    )
}

export default Landing