import React from 'react';

import styles from './styles.scss';

function Banner() {
  return (
    <article className={styles.bannerHome}>
      <h1 className={styles.titleBanner}>Welcome to my Training React App</h1>
    </article>
  );
}

export default Banner;
