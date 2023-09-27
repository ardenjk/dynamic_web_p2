"use client";
import Link from "next/link";
import styles from "./articleCard.module.css";

const articleCard = ({date, description, id, imageAlt, imageSrc, title}) => {
    return (
        <div className = {styles.articleCard}>
            <div className = {styles.articleCardImage}>
                <img src = {imageSrc} alt={imageAlt} />
            </div>
            <div className = {styles.articleCardContent}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
            <p></p>
            <p><Link>href={'${id}'}ReadMore</Link></p>

        </div>
        </div> 
    );
};

export default articleCard;
