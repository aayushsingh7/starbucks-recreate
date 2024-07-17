import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaArrowUpLong } from 'react-icons/fa6'

const Cursor = () => {
    const cursorRef = useRef(null)
    const cursorTxtRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorTxt = cursorTxtRef.current
        const links = document.querySelectorAll("a")
        const buttons = document.querySelectorAll("button")

        const onMouseMove = (event) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, { x: clientX, y: clientY })
        }

        const onMouseEnter = (e, text) => {
            const tag = e.target
            if (tag.classList.contains("allow_hover")) {
                cursorTxt.innerHTML = text
                gsap.to(cursor, { scale: 2.5 })
                cursorTxt.style.display = "flex"
            }
        }

        const onMouseLeave = (event) => {
            gsap.to(cursor, { scale: 1 })
            cursorTxt.style.display = "none"
        }


        document.addEventListener("mousemove", onMouseMove)

        links.forEach((link) => {
            link.addEventListener("mouseenter", (e) => onMouseEnter(e, "View"))
            link.addEventListener("mouseleave", onMouseLeave)
        })

        buttons.forEach((button) => {
            button.addEventListener("mouseenter", (e) => onMouseEnter(e, "Click"))
            button.addEventListener("mouseleave", onMouseLeave)
        })



    })



    return (
        <div className='cursor' ref={cursorRef}>
            <span className='cursor_text' ref={cursorTxtRef}>
            </span>
        </div>
    )
}

export default Cursor