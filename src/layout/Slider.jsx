import React, { useRef } from 'react'
import ProductBox from '../components/ProductBox'
import homeStyles from '../styles/Home.module.css'
import { Link } from 'react-router-dom';

const Slider = ({ data, type }) => {

    let startX;
    let isActive;
    const sliderRef = useRef(null)
    let scrollLeft;

    const onMouseMove = (e) => {
        e.preventDefault()
        if (isActive) {
            const currentX = e.pageX - sliderRef.current.offsetLeft;
            const walk = (currentX - startX) * 2
            sliderRef.current.scrollLeft = scrollLeft - walk
        }
    }

    const onMouseDown = (e) => {
        e.preventDefault()
        isActive = true
        startX = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft = sliderRef.current.scrollLeft
    }

    const onMouseUp = (e) => {
        isActive = false

    }



    return (
        // <div className="slider_container">
        <div className="slide" ref={sliderRef} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
            {type == "products" ? data.map((da) => {
                return <ProductBox key={`${Math.random() * 1000000 + da.id}`} data={da} />
            }) :
                <>
                    <Link className={`${homeStyles.product_box} allow_hover`} to={"/"} style={{ textDecoration: "none" }}>
                        <figure>
                            <div className={homeStyles.product_image}>
                                <img loading="lazy" src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Drinks.jpg" alt="" />
                            </div>
                            <figcaption>
                                <h4>Drinks</h4>
                            </figcaption>
                        </figure></Link>
                    <Link className={`${homeStyles.product_box} allow_hover`} to={"/"} style={{ textDecoration: "none" }}>
                        <figure >
                            <div className={homeStyles.product_image}>
                                <img loading="lazy" src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Food.jpg" alt="" />
                            </div>
                            <figcaption>
                                <h4>Foods</h4>
                            </figcaption>
                        </figure></Link>
                    <Link className={`${homeStyles.product_box} allow_hover`} to={"/"} style={{ textDecoration: "none" }}>
                        <figure >
                            <div className={homeStyles.product_image}>
                                <img loading="lazy" src="https://starbucksstatic.cognizantorderserv.com/Category/Small/Merchandise.jpg" alt="" />
                            </div>
                            <figcaption>
                                <h4>Merchandise</h4>
                            </figcaption>
                        </figure></Link>
                    <Link className={`${homeStyles.product_box} allow_hover`} to={"/"} style={{ textDecoration: "none" }}>
                        <figure>
                            <div className={homeStyles.product_image}>
                                <img loading="lazy" src="https://starbucksstatic.cognizantorderserv.com/Category/Small/CoffeeAtHome.jpg" alt="" />
                            </div>
                            <figcaption>
                                <h4>Coffee At Home</h4>
                            </figcaption>
                        </figure></Link>
                    <Link className={`${homeStyles.product_box} allow_hover`} to={"/"} style={{ textDecoration: "none" }}>
                        <figure >
                            <div className={homeStyles.product_image}>
                                <img loading="lazy" src="https://starbucksstatic.cognizantorderserv.com/Category/Small/ReadyToEat.jpg" alt="" />
                            </div>
                            <figcaption>
                                <h4>Ready to Eat</h4>
                            </figcaption>
                        </figure></Link>
                </>
            }
        </div>
        // </div>
    )
}

export default Slider