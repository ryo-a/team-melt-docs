import React from 'react';
import styles from './tags.module.css'

const NoticeBox = ({ text }) => {
    if (!text) {
        return <div></div>;
    }
    return <div className={styles.noticeBox}>{text}</div>;
};

export default NoticeBox;