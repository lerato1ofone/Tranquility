import React from 'react'
import { TEXT_SUBTITLE, TEXT_TITLE } from '../constants/titleConstants'
import styles from '../styles/WhatWeDo.module.scss'
import Text from './Text'
import DividerIcon from './icons/DividerIcon'
import ServiceCard from './ServiceCard'

function WhatWeDo() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
              <Text text="What we do" type={TEXT_SUBTITLE} className={styles['text-color']} />
             <div className={styles.end}>
                <DividerIcon />
             </div>
            </div>
            <div className={styles.content}>
                <ServiceCard icon='design' title='UI/UX Design' subtitles={['Design thinking', 'User-centered design', 'Interactive design', 'Agile']} />
                <ServiceCard icon='branding' title='Branding' subtitles={['Critical thinking', 'Concept development', 'Story telling', 'Result orientation']} />
                <ServiceCard icon='dev' title='Software development' subtitles={['Full Stack Web Development', 'Mobile App development', 'Interactive design', 'Agile']} />
                <ServiceCard icon='marketing' title='Marketing' subtitles={['Analytical', 'Critical thinking', 'Research', 'Result orientated']} />
            </div>
        </div>
    )
}

export default WhatWeDo
