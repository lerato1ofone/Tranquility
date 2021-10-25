import React, { Fragment, useState } from 'react'
import { TEXT_BIG_TITLE, TEXT_TEXT } from '../constants/titleConstants'
import styles from '../styles/Landing.module.scss'
import HeroIcon from './icons/HeroIcon'
import Text from './Text'

function LandingSlider({slides}) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current == (length - 1) ? 0 : current + 1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <HeroIcon />
            </div>
            <div className={styles.content}>
                <div className={styles.middle}>
                    <Text text={slides[current].heading} type={TEXT_BIG_TITLE} />
                    <Text text={slides[current].body}
                    type={TEXT_TEXT}/>
                    
        
                </div>
                <div className={styles.slides}>
                        <svg width="207" height="5" viewBox="0 0 207 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="5" rx="2.5" fill={current == 0 ? `white` : `#343434`}/>
                            <rect x="55" width="42" height="5" rx="2.5" fill={current == 1 ? `white` : `#343434`}/>
                            <rect x="110" width="42" height="5" rx="2.5" fill={current == 2 ? `white` : `#343434`}/>
                            <rect x="165" width="42" height="5" rx="2.5" fill={current == 3 ? `white` : `#343434`}/>
                        </svg>

                    </div>
            </div>
            <div className={styles.right} onClick={nextSlide}>
                <svg width="123" height="123" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.125 30.75L76.875 61.5L46.125 92.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
      </div>
    )
}

export default LandingSlider