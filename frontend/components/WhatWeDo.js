import React from 'react'
import { TEXT_TITLE } from '../constants/titleConstants'
import styles from '../styles/WhatWeDo.module.scss'
import Text from './Text'

function WhatWeDo() {
    return (
        <div className={styles.container}>
              <Text text="What we do" type={TEXT_TITLE} className={styles['text-color']} />
        </div>
    )
}

export default WhatWeDo
