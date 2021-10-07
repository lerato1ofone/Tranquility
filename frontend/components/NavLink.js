import React from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'

function NavLink({Icon, text, link}) {
    return (
        <div className={styles['nav-link']}>
            <Icon />

            <Link href={link}><a>{text}</a></Link>
        </div>
    )
}

export default NavLink