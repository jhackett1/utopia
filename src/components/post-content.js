import React from 'react'

import styles from './post-content.module.sass'

export default ({content})=>
    <main className={styles.main}>
        <div 
            className={styles.inner} 
            dangerouslySetInnerHTML={{ __html: content }}
            >
        </div>
    </main>