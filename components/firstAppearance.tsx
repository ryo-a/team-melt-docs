import React from 'react';
import styles from './tags.module.css'

const FirstAppearance = ({ text }) => {
    if (!text) {
        return <div></div>;
    }
    return <span className={styles.firstAppearance}>初出: {text}</span>;
};

export default FirstAppearance;