import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Image.module.css";

const image = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Meghana</h1> 
        <p className={styles.description}>I'm a Software Developer with 4+ years of experience focused in backend development and devops.</p>
        <p className={styles.description}>Actively looking for full time opportunities. Reach out to connect with me and know more!</p>  
        <a href='mailto:meghanaraokanneganti@gmail.com' className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src = {getImageUrl("image/myImage.png")} alt="Image of me" className={styles.myImage}></img>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}

export default image