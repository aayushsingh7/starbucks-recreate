import React from 'react'
import styles from '../styles/Footer.module.css'
import { SiStarbucks } from 'react-icons/si'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"
import { FaSpotify } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer_details}>
                <div className={styles.section_1}>
                    <div className={styles.company_logo}>
                        <SiStarbucks />
                        <h5>Starbucks</h5>
                    </div>
                    <p className={styles.description}>Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world Link little better. It was true when the first Starbucks opened in 1971, and it’s just as true today.</p>

                    <div className={styles.subscribe_div}>
                        <input type="text" placeholder='Enter Your Email' />
                        <button>Subscribe</button>
                    </div>

                    <div className={styles.icons}>
                        <h5>Follow Us 👇</h5>
                        <div> <FaFacebook />
                            <AiFillInstagram />
                            <FaSpotify />
                            <AiFillTwitterCircle /></div>
                    </div>
                </div>
                <div className={styles.section_2}>
                    <div className={styles.options}>
                        <h5>About Us</h5>
                        <ul>
                            <li><Link to="/">Our Company</Link></li>
                            <li><Link to="/">Our Coffee</Link></li>
                            <li><Link to="/">Stories and News</Link></li>
                            <li><Link to="/">Starbucks Archive</Link></li>
                            <li><Link to="/">Investor Relations</Link></li>
                            <li><Link to="/">Customer Service</Link></li>
                            <li><Link to="/">Contact Us</Link></li>

                        </ul>
                    </div>

                    <div className={styles.options}>
                        <h5>Careers</h5>
                        <ul>
                            <li><Link to="/">Culture and Values</Link></li>
                            <li><Link to="/">Inclusion, Diversity, and Equity</Link></li>
                            <li><Link to="/">College Achievement Plan</Link></li>
                            <li><Link to="/">Alumni Community</Link></li>
                            <li><Link to="/">U.S. Careers</Link></li>
                            <li><Link to="/">International Careers</Link></li>
                        </ul>
                    </div>

                    <div className={styles.options}>
                        <h5>Social Impact</h5>
                        <ul>
                            <li><Link to="/">People</Link></li>
                            <li><Link to="/">Planet</Link></li>
                            <li><Link to="/">Environmental and Social Impact Reporting</Link></li>

                        </ul>
                    </div>
                </div>
            </section>

            <div className={styles.copyright}>
                © 2024 Starbucks Coffee Company. All rights reserved.
            </div>


        </footer>
    )
}

export default Footer