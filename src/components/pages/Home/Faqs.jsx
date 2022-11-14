import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { faqs } from '../../../data/faqs';
import Container from '../../utils/Container';
import styles from './Faqs.module.scss';

const HomeFaqs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>FAQs</div>
          <div className={styles.inner}>
            {faqs &&
              faqs.map((faq, index) => (
                <div className={styles.item} key={faq.id}>
                  <Panel
                    {...faq}
                    activeTab={activeTab}
                    index={index}
                    activateTab={activateTab}
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const Panel = ({ question, answer, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.scrollHeight);
  }, []);

  return (
    <div
      className={classNames(
        styles.panel,
        activeTab === index ? styles.active : ''
      )}
    >
      <button
        className={styles.label} //
        onClick={() => activateTab(index)}
      >
        {question}
      </button>
      <div
        className={styles.desc}
        style={{ height: activeTab === index ? height : 0 }}
        ref={ref}
      >
        <p className={styles.text}>{answer}</p>
      </div>
    </div>
  );
};

export default HomeFaqs;
