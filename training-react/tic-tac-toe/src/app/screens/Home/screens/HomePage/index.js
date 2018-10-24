import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '@consts/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.scss';

function HomePage() {
  return (
    <section className={styles.homePage}>
      <article className={styles.bannerHome}>
        <h1 className={styles.titleBanner}>Welcome to my Training React App</h1>
      </article>
      <article className={styles.containerCards}>
        <Link to={ROUTES.GAME} className={styles.card}>
          <FontAwesomeIcon className={styles.iconCard} icon={faGamepad} />
          <h1 className={styles.titleCard}>Try my Game</h1>
        </Link>
        <Link to={ROUTES.PROFILE} className={styles.card}>
          <FontAwesomeIcon className={styles.iconCard} icon={faUser} />
          <h1 className={styles.titleCard}>Edit your Profile</h1>
        </Link>
      </article>
    </section>
  );
}

export default HomePage;
