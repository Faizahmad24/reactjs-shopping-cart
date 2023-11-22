/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'
import { ReactPropTypes } from "react"
import styles from './Container.module.css'

const Container = (props) => {
    const {children} = props
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
Container.ReactPropTypes = {
    children: ReactPropTypes
}

export default Container