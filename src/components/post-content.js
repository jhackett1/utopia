import React from 'react'

import styles from './post-content.module.sass'

export default ({children})=>
    <main className={styles.main}>
        <div className={styles.inner}>
            {children}
        </div>
    </main>