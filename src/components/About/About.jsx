import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

const About = () => {
  return (
<section className={styles.container} id='about'>
    <h2 className={styles.title}>About me</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutMe.png")} alt ="me sitting with laptop" className={styles.aboutImage}></img>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt='server icon'></img>
        <div className={styles.aboutItemText}>
            <h3>Backend developer</h3>
            <p>I have experience developing fast and  optimized backend systems and APIs</p>
        </div>
        </li>
        <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt='cursor icon'></img> 
        <div className={styles.aboutItemText}>
            <h3>Frontend developer</h3>
            <p>I'm a Frontend developer with experience in building responsive UI with optimized sites </p>
        </div>
        </li>
        <li className={styles.aboutItem}><img src={getImageUrl("about/mlIcon.png")} alt='ML icon'></img>
        <div className={styles.aboutItemText}>
            <h3>Machine learning Enthusiast</h3>
            <p>I have worked on multiple machine learning projects and acheived substantial results</p>
        </div>
        </li>
    </ul>
    </div>
</section>
  )
}

export default About