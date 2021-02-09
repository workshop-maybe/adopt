import React from 'react'
import styles from '../../styles/Colin.module.css'

function Colin() {
    return (
        <div>
            <h1>Colin Style Experiments</h1>
            <div className={styles.shape}>Make me a different shape</div>
            <div className={styles.animate}>Animate me!</div> 
            <div className={styles.shadows}>Apply some shadows to me</div>
            <div className={styles.textdecorated}>Decorate my text</div>
        </div>
    )
}

export default Colin