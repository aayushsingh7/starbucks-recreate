import React, { useState } from 'react';
import styles from './../styles/Navbar.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { MdOutlineMenuBook } from 'react-icons/md';
import { IoGift, IoStorefrontSharp } from 'react-icons/io5';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
// import StoreLocator from './StoreLocator';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);



    const toggleStoreLocator = () => {
        setIsStoreLocatorOpen(!isStoreLocatorOpen);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar_main_container}>
                <img src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720633150/Starbucks/22_xavkyq.png" alt="logo" className={styles.logo} />

                <div className={`${styles.navbar_content_container} ${isMenuOpen ? styles.open : ''}`}>
                    <div className={styles.branding_items}>
                        <Link to="/">Menu</Link>
                        <Link to="/">Rewards</Link>
                        <Link to="/">Gift Cards</Link>
                    </div>

                    <div className={styles.user_items}>
                        <Link to="/" onClick={toggleStoreLocator}><FaLocationDot /> Find a Store</Link>
                        <button className={styles.signIn}>Sign In</button>
                        <button>Join Now</button>
                    </div>
                </div>

                <div className={styles.mob_options}>
                    <AiOutlineSearch />
                    {isMenuOpen ? <AiOutlineClose onClick={() => setIsMenuOpen(false)} /> : <RxHamburgerMenu onClick={() => setIsMenuOpen(true)} />}
                </div>
            </nav>

            <ul className={` ${styles.mob_links} ${isMenuOpen && styles.show}`}>
                <li><Link to="/"><MdOutlineMenuBook /> Menu</Link></li>
                <li><Link to="/"><IoGift />  Rewards</Link></li>
                <li><Link to="/"><BsFillCreditCard2FrontFill />                Gift Cards</Link></li>
                <li><Link to="/"> <IoStorefrontSharp /> Find a Store</Link></li>
                {/* <li><Link to="/">Sign In/Up</Link></li> */}
            </ul>


        </header>
    );
};

export default Navbar;