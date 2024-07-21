import React, { useEffect, useState } from 'react'
import styles from '../styles/Intro.module.css'
import FramerMotion from '../animation/FramerMotion'

const Intro = () => {
    const [hide, setHide] = useState(false)
    const [shrinkImage, setShrinkImage] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHide(true)
        }, 4500)
        setTimeout(() => {
            setShrinkImage(true)
        }, 2000)

    }, [])


    return (
        <div onKeyDown={(e) => e.preventDefault()} className={`${styles.intro_container} ${hide ? styles.hide : ""}`}>
            <div className={styles.logo_div}>
                <img className={shrinkImage ? styles.animation : ""} src="./starbucks-intro.png" loading="eager" alt="" />
            </div>
            <div className={styles.intro_text}>
                <FramerMotion delay={2} type={"topToBottom"} overflowHidden={"hidden"} animateOnces={true}>
                    <h2>STARBUCKS</h2>
                </FramerMotion>
                <FramerMotion delay={2.3} type={"topToBottom"} overflowHidden={"hidden"} animateOnces={true}>
                    <p>COFFEE THAT INSPIRES</p>
                </FramerMotion>
            </div>
        </div>
    )
}

export default Intro