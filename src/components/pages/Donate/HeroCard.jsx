import styles from './HeroCard.module.scss';

const floatingIcons = [
  {
    key: 'heart',
    label: 'Sadaqah',
    className: styles.icon_1,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21s-7.5-4.6-10-9.1C0.3 8.4 1.8 4.8 5.2 4.1c2-.4 4 .5 5 2.2 1-1.7 3-2.6 5-2.2 3.4.7 4.9 4.3 3.2 7.8C19.5 16.4 12 21 12 21z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 'book',
    label: "Da'wah",
    className: styles.icon_2,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13z"
          fill="currentColor"
        />
        <path
          d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    key: 'water',
    label: 'Clean Water',
    className: styles.icon_3,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2s6.5 7.4 6.5 12A6.5 6.5 0 1 1 5.5 14C5.5 9.4 12 2 12 2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 'education',
    label: 'Education',
    className: styles.icon_4,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3 1 8.5 12 14l9-4.5V15h2V8.5L12 3z" fill="currentColor" />
        <path
          d="M5 11.2V15c0 1.9 3.1 4 7 4s7-2.1 7-4v-3.8l-7 3.5-7-3.5z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    key: 'medical',
    label: 'Medical Aid',
    className: styles.icon_5,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-2 10h-3v3h-4v-3H7v-4h3V6h4v3h3v4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 'food',
    label: 'Food Aid',
    className: styles.icon_6,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 2v8.5A2.5 2.5 0 0 1 8.5 13H8v9H6v-9h-.5A2.5 2.5 0 0 1 3 10.5V2h2v7h1V2h2v7h1V2h2z"
          fill="currentColor"
        />
        <path
          d="M16.5 2C14.6 2 13 4.2 13 7s1.2 4.7 2.5 5.4V21h2v-8.6C18.8 11.7 20 9.8 20 7c0-2.8-1.6-5-3.5-5z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    key: 'orphan',
    label: 'Orphan Care',
    className: styles.icon_7,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="4" fill="currentColor" />
        <path
          d="M4 21v-1c0-3.9 3.6-7 8-7s8 3.1 8 7v1H4z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    key: 'mosque',
    label: 'Masjid',
    className: styles.icon_8,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2c1.2 1.5 2 3 2 4.3A2 2 0 0 1 12 8a2 2 0 0 1-2-1.7C10 5 10.8 3.5 12 2z"
          fill="currentColor"
        />
        <path
          d="M3 21v-6.5C3 11.5 5 9 7 8v3H5v10H3zm18 0v-6.5C21 11.5 19 9 17 8v3h2v10h2z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M7 21v-7a5 5 0 0 1 10 0v7H7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const HeroCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glass_bg} aria-hidden="true">
        <span className={styles.blob_1} />
        <span className={styles.blob_2} />
        <span className={styles.blob_3} />
      </div>

      <div className={styles.icons_layer} aria-hidden="true">
        {floatingIcons.map((item) => (
          <span
            key={item.key}
            className={`${styles.floating_icon} ${item.className}`}
            title={item.label}
          >
            {item.svg}
          </span>
        ))}
      </div>

      <div className={styles.card_stage}>
        <div className={styles.bank_card}>
          <div className={styles.card_top}>
            <span className={styles.chip} />
            <span className={styles.card_brand}>DIT&nbsp;Care</span>
          </div>

          <div className={styles.card_number}>
            <span>••••</span>
            <span>••••</span>
            <span>••••</span>
            <span>4242</span>
          </div>

          <div className={styles.card_bottom}>
            <div className={styles.card_holder}>
              <span className={styles.label}>Card Holder</span>
              <span className={styles.value}>Sadaqah Jariyah</span>
            </div>
            <div className={styles.card_expiry}>
              <span className={styles.label}>Valid Thru</span>
              <span className={styles.value}>∞ / ∞</span>
            </div>
          </div>

          <div className={styles.card_shine} />
        </div>

        <h2 className={styles.headline}>Give with confidence, give for a lifetime</h2>
        <p className={styles.subline}>
          Every donation is secured and encrypted — your generosity reaches those who need it most.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
