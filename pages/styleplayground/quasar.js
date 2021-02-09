import React from 'react'
import styles from '../../styles/Quasar.module.css'

function Quasar() {
    return (
        <div>
            <h1>Quasar Style Experiments</h1>
            <div className={styles.shape}>Make me a different shape</div>
            <div className={styles.animate}>Animate me!</div> 
            <div className={styles.shadows}>Apply some shadows to me</div>
            <div className={styles.textdecorated}>Decorate my text</div>
        </div>
    )
}

export default Quasar