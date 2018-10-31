import React from 'react'
import Link from 'gatsby-link'

import styles from './button.module.sass'

const Button = ({
    href,
    label
}) =>
    <Link className={styles.button} to={href}>
        {label}
    </Link>

Button.defaultProps = {
    label: "Register now"
}

export default Button