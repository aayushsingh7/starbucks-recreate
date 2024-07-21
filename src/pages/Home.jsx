import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/locomotive-scroll.css";
import React, { useEffect, useRef, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { IoIosArrowRoundDown, IoIosArrowUp } from 'react-icons/io';
import { IoFastFoodSharp } from 'react-icons/io5';
import { SiBuymeacoffee, SiCodefresh } from 'react-icons/si';
import styles from '../styles/Home.module.css';
import InfiniteScroll from '../layout/InfiniteScroll';
gsap.registerPlugin(ScrollTrigger);
import communityPosts from '../json/community.json'
import faqData from '../json/faqData.json'
import ProductBox from '../components/ProductBox';
import FAQBox from '../components/FAQBox';
import { BsFillPatchQuestionFill, BsQuestionCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import FramerMotion from '../animation/FramerMotion';
import productsData from '../json/products.json'
import bestSellers from '../json/bestSellers.json'
import Slider from '../layout/Slider';

const Home = () => {

    const reversedArr = [...productsData]?.reverse()
    const scrollRef = useRef(null);
    const bestSellerRef = useRef(null)
    const productsSectionRef = useRef(null)
    const productSlider1Ref = useRef(null)
    const productSlider2Ref = useRef(null)
    const contentRef = useRef(null)
    const frameRef = useRef(null)
    const shadowRef = useRef(null)
    const reviewsRef = useRef(null)
    const categoriesRef = useRef(null)
    const [bestSellerSelected, setBestSellerSelected] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);


    useEffect(() => {
        const ctx = gsap.context(() => {

            const details = gsap.utils.toArray(".content-section:not(:first-child)")
            const photos = gsap.utils.toArray(".frame-image:not(:first-child)")
            const allPhotos = gsap.utils.toArray(".frame-image")
            gsap.set(photos, { yPercent: 101 })

            const animation1 = gsap.fromTo(
                productSlider1Ref.current,
                { x: '-80%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1 }
            );

            const animation2 = gsap.fromTo(
                productSlider2Ref.current,
                { x: '80%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1 }
            );

            const animation3 = gsap.fromTo(
                categoriesRef.current,
                { x: '80%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 1 }
            )

            const shadowAnimation = gsap.fromTo(
                shadowRef.current,
                { opacity: 0, display: "none" },
                { opacity: 1, display: "flex", duration: 1 }
            )

            details.forEach((detail, index) => {
                let headline = detail.querySelector("h4")
                let animation3 = gsap.timeline()
                    .to(photos[index], { yPercent: 0 })
                    .set(allPhotos[index], { autoAlpha: 0 })
                ScrollTrigger.create({
                    trigger: headline,
                    start: "top 80%",
                    end: "top 20%",
                    animation: animation3,
                    scrub: true
                })
            })


            ScrollTrigger.create({
                trigger: productsSectionRef.current,
                start: 'top top',
                end: 'center 80%',
                scrub: true,
                animation: animation1,
            });

            ScrollTrigger.create({
                trigger: productsSectionRef.current,
                start: 'top top',
                end: 'center 0%',
                scrub: true,
                animation: animation2,
            });

            ScrollTrigger.create({
                trigger: productsSectionRef.current,
                start: 'top center',
                end: 'top top',
                scrub: true,
                animation: animation3,
            });

            ScrollTrigger.create({
                trigger: contentRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: frameRef.current,
                scrub: true
            })

            ScrollTrigger.create({
                trigger: bestSellerRef.current,
                start: "bottom bottom",
                end: "top top",
                endTrigger: productsSectionRef.current,
                pin: true,
                pinSpacing: false,
                scrub: true
            });

            ScrollTrigger.create({
                trigger: productsSectionRef.current,
                start: "top center",// Start when the top of productsSectionRef hits the bottom of the viewport
                end: "bottom top",
                animation: shadowAnimation,
                scrub: true, // Make it scrub, so it smoothly appears and disappears
            });


        })

        return () => ctx.revert()

    }, [])


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth !== windowWidth) {
                window.location.reload()
            }
        }
        window.addEventListener("resize", handleResize());
        return () => {
            window.removeEventListener("resize", handleResize());
        };
    }, []);


    return (
        <div className={styles.container} ref={scrollRef} data-scroll-container>
            <section className={styles.hero_section} onMouseDown={(e) => e.preventDefault()} data-scroll >

                <h1 data-scroll data-scroll-speed={windowWidth > 700 ? "1" : "0.4"} >
                    <span>It's not just coffee. It's</span>
                    <span className={styles.main}>Starbucks</span>
                </h1>

                <div className={styles.image_bg}>
                    <div data-scroll data-scroll-speed={windowWidth > 700 ? "1.5" : "0.8"} className={styles.div}>
                        <img loading="eager" className={styles.img_1} src="https://res.cloudinary.com/dvk80x6fi/image/upload/v1720959889/image_transparent_Craiyon_7_zpbwaf.png" alt="Image 1" />
                    </div>
                    <div data-scroll data-scroll-speed={windowWidth > 700 ? "1.9" : "1.1"} className={styles.div}>
                        <img loading="eager" className={styles.img_2} src="https://res.cloudinary.com/dvk80x6fi/image/upload/v1720958233/image_transparent_Craiyon_5_orvr2p.png" alt="Image 2" />
                    </div>
                    <div data-scroll data-scroll-speed={windowWidth > 700 ? "2.5" : "1.3"} className={styles.div}>
                        <img loading="eager" className={styles.img_3} src="https://res.cloudinary.com/dvk80x6fi/image/upload/v1720329633/cup-1_transparent_Craiyon_oddwqr.png" alt="Image 3" />
                    </div>
                    <div data-scroll data-scroll-speed={windowWidth > 700 ? "1.9" : "1.1"} className={styles.div}>
                        <img loading="eager" className={styles.img_4} src="https://res.cloudinary.com/dvk80x6fi/image/upload/v1720958351/image_transparent_Craiyon_4_frmtvj.png" alt="Image 4" />
                    </div>
                    <div data-scroll data-scroll-speed={windowWidth > 700 ? "1.5" : "0.8"} className={styles.div}>
                        <img loading="eager" className={styles.img_5} src="https://res.cloudinary.com/dvk80x6fi/image/upload/v1720959889/image_transparent_Craiyon_7_zpbwaf.png" alt="Image 5" />
                    </div>
                </div>


                <span className={styles.indicator_arrow} data-scroll data-scroll-speed="-0.1"><IoIosArrowRoundDown /></span>

            </section>

            <section ref={bestSellerRef} className={styles.best_sellers} data-scroll >
                <div className={styles.shadow} ref={shadowRef}></div>

                <h2 data-scroll style={{ fontWeight: "600" }}>BEST SELLERS</h2>
                <div className={styles.best_seller_con}>
                    <div className={styles.product_con}>
                        {bestSellers.map((data, index) => {
                            return <FramerMotion key={data.name} type={"leftToRight"} overflowHidden={"hidden"} animateOnces={false}><h3 className={bestSellerSelected === index && styles.active} onClick={() => setBestSellerSelected(index)} >{data.name}</h3></FramerMotion>
                        })}

                    </div>

                    <Link style={{ textDecoration: "none", display: "flex", alignItems: "center", flexDirection: "column" }} to={"/"} className={`${styles.image_con} allow_hover`} >
                        <FramerMotion className={"height_li"} width={"100%"} type={"rightToLeft"} overflowHidden={"hidden"} animateOnces={false}>
                            <img loading="eager" id='best_sellers_img_con' src={bestSellers[bestSellerSelected].image} alt={bestSellers[bestSellerSelected].name} />
                        </FramerMotion>
                        <div className={styles.product_details}>
                            <span>₹{bestSellers[bestSellerSelected].price}.00</span>
                            <button className="allow_hover">Add To Bag</button>
                        </div>
                    </Link>
                </div>
            </section>

            <section ref={productsSectionRef} className={styles.products_section} data-scroll >
                <FramerMotion type={"topToBottom"} animateOnces={false} overflowHidden={"hidden"}><h2 style={{ marginBottom: "0px" }}>CATEGORIES</h2></FramerMotion>
                <div className={styles.products} ref={categoriesRef}>
                    <Slider type="category" />
                </div>
                <div style={{ width: "100%", marginTop: "30px" }}>
                    <FramerMotion type={"topToBottom"} width={"100%"} animateOnces={false} overflowHidden={"hidden"}> <h2 style={{ marginBottom: "0px", width: "100%" }}>Products</h2> </FramerMotion>
                    <div className={styles.products} ref={productSlider1Ref}>
                        <Slider data={reversedArr} type={"products"} />
                    </div>

                    <div className={styles.products} ref={productSlider2Ref}>
                        <Slider data={productsData} type={"products"} />
                    </div>
                </div>
                <button className='allow_hover'>View More Products</button>
            </section>

            <section className={styles.features} ref={contentRef} data-scroll>
                <div className={styles.about_frame} >
                    <div className={`${styles.content} content-section`}>
                        <h4>We only use best and <span><SiCodefresh /></span> fresh ingredients. <IoIosArrowRoundDown className={styles.arrow} /></h4>
                    </div>
                    <div className={`${styles.content} content-section`}>
                        <h4>Maintaining Hygien <span><IoFastFoodSharp />   </span> is our top most priority. <IoIosArrowRoundDown className={styles.arrow} /></h4>
                    </div>
                    <div className={`${styles.content} content-section`}>
                        <h4>We make every coffee <span><SiBuymeacoffee />
                        </span> with our Heart. <AiFillHeart /></h4>
                    </div>
                </div>
                <div className={styles.frame} ref={frameRef}>
                    <div className={`${styles.frame_img} frame_img`}>
                        <img loading="lazy" className='frame-image' src="./features-1.webp" alt="" />

                        <img loading="lazy" className='frame-image' src="./features-2.avif" alt="" />

                        <img loading="lazy" className='frame-image' src="./features-3.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className={styles.features_mob} data-scroll>
                <FramerMotion overflowHidden={"hidden"} type={"leftToRight"} xAxis={200} animateOnces={false}>
                    <figure className={styles.normal}>
                        <figcaption>
                            <h4>We only use best and <SiCodefresh /> fresh ingredients. <IoIosArrowRoundDown className={styles.arrow} /></h4>
                        </figcaption>h
                        <div className={styles.mob_image}>
                            <img loading="lazy" src="./features-1.webp" alt="" />
                        </div>
                    </figure>
                </FramerMotion>

                <FramerMotion overflowHidden={"hidden"} type={"rightToLeft"} xAxis={200} animateOnces={false}>
                    <figure className={styles.reverse} style={{ flexDirection: "row-reverse" }}>
                        <figcaption>
                            <h4>Maintaining Hygien <IoFastFoodSharp /> is our top most priority. <IoIosArrowRoundDown className={styles.arrow} /></h4>
                        </figcaption>
                        <div className={styles.mob_image}>
                            <img loading="lazy" src="./features-2.avif" alt="" />
                        </div>
                    </figure>
                </FramerMotion>

                <FramerMotion overflowHidden={"hidden"} type={"leftToRight"} xAxis={200} animateOnces={false}>
                    <figure className={styles.normal}>
                        <figcaption>
                            <h4>We make every coffee <SiBuymeacoffee /> with our Heart. <AiFillHeart /></h4>
                        </figcaption>
                        <div className={styles.mob_image}>
                            <img loading="lazy" src="./features-3.jpg" alt="" />
                        </div>
                    </figure>
                </FramerMotion>

            </section>

            <section className={styles.community} ref={reviewsRef} data-scroll>
                <FramerMotion type={"topToBottom"} justifyContent="center" width={"100%"} overflowHidden={"hidden"} animateOnces={false}><h2>From The <span style={{ color: "var(--highlight-color)", textDecoration: "underline" }}>Starbucks</span> Community</h2></FramerMotion>
                <InfiniteScroll direction={"right"} data={communityPosts.slice(0, 10)} />
                <InfiniteScroll direction={"left"} data={communityPosts.slice(10)} />
            </section>

            <section className={styles.faq_container} data-scroll>

                <h2>Frequently Asked <span style={{ background: "var(--highlight-color)", padding: "0px 10px" }}>Question</span></h2>
                <div className={styles.faqs}>
                    {faqData.map((item, index) => (
                        <FramerMotion key={item.question} overflowHidden={"none"} xAxis={200} type={index % 2 === 0 ? "leftToRight" : "rightToLeft"} animateOnces={false}><FAQBox key={index} question={item.question} answer={item.answer} /></FramerMotion>
                    ))}
                </div>
            </section>

            <section className={styles.about_coffee} data-scroll>
                <div className={styles.image_div}>
                    <div>
                        <FramerMotion type={"topToBottom"} overflowHidden={"hidden"} delay={0} animateOnces={false}> <h6>Art & Science Of Coffee Brewing </h6></FramerMotion>
                        <FramerMotion type={"topToBottom"} overflowHidden={"hidden"} delay={0.2} animateOnces={false}><p> Master the perfect brew with Starbucks! Learn the art and science of coffee brewing. </p></FramerMotion>
                        <FramerMotion type={"topToBottom"} overflowHidden={"hidden"} delay={0.4} animateOnces={false}><button className='allow_hover'>Learn More</button></FramerMotion>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
