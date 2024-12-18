import React from 'react';
import styles from './tags.module.css'

const CategoryTag = ({ text }) => {
    if (!text) {
        return <div></div>;
    }
    return <span className={styles.category}>{text}</span>;
};

export default CategoryTag;