import React from 'react'
import { TEXT_SUBTITLE, TEXT_TEXT } from '../constants/titleConstants'
import styles from '../styles/ServiceCard.module.scss'
import Text from './Text'
import Image from 'next/image'

function ServiceCard({ icon, title, subtitles}) {
    return (
        <div className={styles.card}>
          <div className={styles.icon}>
            <div className={styles.image}>
              <Image src={`/icons/${icon}.svg`} height={100} width={100} />
            </div>
            <svg className={styles.divider} width="2" height="165" viewBox="0 0 1 145" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1" height="165" fill="#343434"/>
            </svg>
          </div>
          
          <div>
              <Text text={title} type={TEXT_SUBTITLE} className={styles['text-color']} />
              <div>
                {subtitles.map((subtitle, index) => (
                         <Text key={index} text={subtitle} type={TEXT_TEXT} className={styles.subtitle} />
                ))}
              </div>
          </div>
        </div>
    )
}

export default ServiceCard
