import React, { useState } from 'react';
import styles from '../styles/FAQBox.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const FAQBox = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (

        <div className={styles.faq_item}>
            <div className={styles.faq_question} onClick={toggleExpand}>
                <h3>{question}</h3>
                <span className={styles.icon}><AiOutlinePlus style={{ transition: ".5s ease-in-out", transform: `rotate(${isExpanded ? "134deg" : "0deg"})` }} /></span>
            </div>
            <div style={{ height: isExpanded ? "160px" : "0px", transition: ".5s ease-in-out" }} className={`${styles.faq_answer}`}>
                <article style={{ height: "180px" }}>
                    {answer}
                </article>
            </div>
        </div>

    );
};

export default FAQBox;