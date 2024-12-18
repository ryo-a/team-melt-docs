import React from 'react';
import styles from './tags.module.css'

const TermRuby = ({ text }) => {
    if (!text) {
        return <div></div>;
    }
    return <span className={styles.termruby}>{text}</span>;
};

export default TermRuby;