import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '@consts/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.scss';

function OptionsHome() {
  return (
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
  );
}

export default OptionsHome;
