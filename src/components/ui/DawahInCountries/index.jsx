import { useEffect, useState } from 'react';
import { countries as allCountries } from '../../../data/countries';
import styles from './index.module.scss';

const DawahInCountries = () => {
  const [countries, setCountries] = useState(allCountries.slice(0, 12));

  useEffect(() => {
    const getRandomUniqueCountries = (maxIndex, quantity) => {
      let uniqueIndexes = [];
      let uniqueCountries = [];
      while (uniqueIndexes.length < quantity) {
        let r = Math.floor(Math.random() * maxIndex) + 1;
        if (uniqueIndexes.indexOf(r) === -1) {
          uniqueIndexes.push(r);
          uniqueCountries.push(allCountries[r - 1]);
        }
      }
      return uniqueCountries;
    };

    const interval = setInterval(
      () => setCountries(getRandomUniqueCountries(allCountries.length, 12)),
      7000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {countries &&
        countries.map((country, index) => {
          return index === 1 ||
            index === 2 ||
            index === 4 ||
            index === 5 ||
            index === 9 ||
            index === 10 ? (
            <div
              className="col-span-1 row-span-2 text-center text-white service-grid"
              key={index}
            >
              <div
                className="service-grid-content"
                style={{ background: "linear-gradient(0deg, " + country.bgColor + ")" }}
              >
                <span>{country.name}</span>
              </div>
            </div>
          ) : (
            <div
              className="col-span-2 row-span-1 text-center text-white service-grid"
              key={index}
            >
              <div
                className="service-grid-content"
                style={{ background: "linear-gradient(90deg, " + country.bgColor + ")" }}
              >
                <span>{country.name}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DawahInCountries;
