import React from 'react'
import styles from '../styles/Header.module.scss'
import NavLink from './NavLink'
import SocialIcon from './SocialIcon'
import HomeIcon from './icons/HomeIcon'
import BriefcaseIcon from './icons/BriefcaseIcon'
import ContactIcon from './icons/ContactIcon'
import BlogIcon from './icons/BlogIcon'
import InstagramIcon from './icons/InstagramIcon'
import FacebookIcon from './icons/FacebookIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import WhiteLogoIcon from './icons/WhiteLogoIcon'

function Header() {
    return (
        <header className={styles['header-container']}>
            <WhiteLogoIcon />
            <div className={styles.right}>
                <div className={styles['nav-links-container']}>
                    <NavLink Icon={HomeIcon} text='Home' link='/' />
                    <NavLink Icon={BriefcaseIcon} text='Our work' link='/work' />
                    <NavLink Icon={ContactIcon} text='Contact' link='/contact'/>
                    <NavLink Icon={BlogIcon} text='Blog' link='/blog'/>
                </div>

                <div className={styles['social-icons']}>
                    <SocialIcon Icon={InstagramIcon} />
                    <SocialIcon Icon={FacebookIcon} />
                    <SocialIcon Icon={LinkedinIcon} />
                </div>
            </div>
        </header>
    )
}

export default Header