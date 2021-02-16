import React from 'react'
import styles from '../../styles/James.module.css'

function james() {
    return (
        <div>
            <h1>James Style Experiments</h1>
            <div className={styles.shape}>
                <p>
                    I'm a new shape!
                </p>
            </div>
            <p>
                <a href='https://bennettfeely.com/clippy/'>
                    CSS clip-path maker
                </a>
            </p>
            <div className={styles.movement}>can't stop won't stop</div>
            <div className={styles.shadow}>what's in the shade there?</div>
            <div className={styles.text}>
                <p>James</p>
                <p><a href='https://fonts.google.com/' className={styles.jameslinks}>Google Fonts</a></p>
            </div>
            <div className={styles.text}>
                <a href='https://cssgradient.io/'>cool tool click here</a>
            </div>
        </div>
    )
}

export default james
