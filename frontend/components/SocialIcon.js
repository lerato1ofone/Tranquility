import React from 'react'
import styles from '../styles/Header.module.scss'

function SocialIcon({Icon}) {
    return (
        <div className={styles['social-icon']}>
            <Icon />
        </div>
    )
}

export default SocialIcon
