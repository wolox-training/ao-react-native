import React from 'react';

import BannerHome from './components/Banner';
import ContainerCards from './components/ContainerCards';
import styles from './styles.scss';

function HomePage() {
  return (
    <section className={styles.homePage}>
      <BannerHome />
      <ContainerCards />
    </section>
  );
}

export default HomePage;
