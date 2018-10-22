import React from 'react';

import styles from './styles.scss';

function ErrorComponent() {
  return (
    <section className={styles.containerPagError}>
      <div className={styles.msgError}>
        <h1 className={styles.titleError}>PAGE NOT FOUND</h1>
        <span className={styles.descError}>La página a la que intenta acceder no existe</span>
      </div>
    </section>
  );
}

export default ErrorComponent;
