import React from 'react';

import Banner from './components/Banner';
import ContainerCards from './components/ContainerCards';
import styles from './styles.scss';

function HomePage() {
  return (
    <section className={styles.homePage}>
      <Banner />
      <ContainerCards />
    </section>
  );
}

export default HomePage;
