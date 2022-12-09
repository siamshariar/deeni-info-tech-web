import Link from 'next/link';
import Container from '../../utils/Container';
import { countries as allCountries } from '../../../data/countries';
import styles from './DawahInCountries.module.scss';
import { useEffect, useState } from 'react';

const ServiceGrid = () => {
  const [countries, setCountries] = useState(allCountries);

  useEffect(() => {
    function getRandomUniqueIndexes(maxIndex, quantity) {
      let indexes = [];
      let newCountries = [];
      while (indexes.length < quantity) {
        var r = Math.floor(Math.random() * maxIndex) + 1;
        if (indexes.indexOf(r) === -1) indexes.push(r);
      }

      indexes.forEach((index) => {
        newCountries.push(allCountries[index - 1]);
      });

      return newCountries;
    }

    const interval = setInterval(
      () => setCountries(getRandomUniqueIndexes(allCountries.length, 12)),
      3000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {[...Array(12)].map((x, index) => {
        return index + 1 === 2 ||
          index + 1 === 3 ||
          index + 1 === 5 ||
          index + 1 === 6 ||
          index + 1 === 10 ||
          index + 1 === 11 ? (
          <div className="col-span-1 row-span-2 text-center text-white service-grid">
            <div className="service-grid-content">
              <span>
                <img src={countries[index].imagePath} alt="" />
              </span>
              <span>{countries[index].name}</span>
            </div>
          </div>
        ) : (
          <div className="col-span-2 row-span-1 text-center text-white service-grid">
            <div className="service-grid-content">
              <span>
                <img src={countries[index].imagePath} alt="" />
              </span>
              <span>{countries[index].name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DawahInCountries = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${styles.left}`}>
        <Container>
          <div className={styles.content}>
            <div className={styles.image}>
              <ServiceGrid />
            </div>
            <div className={styles.detail}>
              <div className={styles.title}>
                <h2>Dawah in non-muslim countries</h2>
              </div>
              <div className={styles.text}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid reiciendis veniam commodi id maxime quo, nihil quae ab
                  suscipit cupiditate hic quaerat alias dolores quisquam in
                  voluptatum temporibus minima repellat.
                </p>
              </div>
              <div className={styles.btn}>
                <Link href="/detail-grid-1">
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DawahInCountries;
