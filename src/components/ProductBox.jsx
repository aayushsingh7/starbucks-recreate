import React, { useState } from 'react'
import styles from '../styles/ProductBox.module.css'
import { Link } from 'react-router-dom'

const ProductBox = ({ data }) => {

    return (
        <Link to="/" className='allow_hover' style={{ textDecoration: "none", background: "var(--secondary-background)" }}>
            <figure className={styles.product_box}>
                <div className={styles.product_image}>
                    <img src={data.image} alt="" />
                </div>
                <figcaption>
                    <h4>{data.name}</h4>
                    <p>₹{data.price}.00</p>
                </figcaption>
            </figure>
        </Link>
    )
}

export default ProductBox