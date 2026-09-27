// import classNames from 'classnames';
import Section from '../../utils/Section';
import DonateForm from './Form';
import styles from './index.module.scss';
import aboutStyles from '../Home/About.module.scss';
import Link from "next/link";
import Share from "../../social-share/share";
import classNames from "classnames";

const donationIcons = [
  {
    key: 'heart',
    label: 'Donate',
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
    key: 'hand-heart',
    label: 'Hand Heart',
    className: styles.icon_2,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 14H6.5a2.5 2.5 0 0 0 0 5h7a5 5 0 0 0 4.5-2.8L20 12" />
        <path d="M3 13l3 1" />
        <path d="M15 6.5c-1.2-1.4-3.3-1.4-4.3.2-1 1.5-.3 3 1.1 4.1l2.2 1.7 2.2-1.7c1.4-1.1 2.1-2.6 1.1-4.1-1-1.6-3.1-1.6-4.3-.2z" />
      </svg>
    ),
  },
  {
    key: 'gift',
    label: 'Gift',
    className: styles.icon_3,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M12 8c-1.5 0-4-1-4-3a2.2 2.2 0 0 1 4-1.3A2.2 2.2 0 0 1 16 5c0 2-2.5 3-4 3z" />
      </svg>
    ),
  },
  {
    key: 'hand-coins',
    label: 'Give',
    className: styles.icon_4,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="6" r="3" />
        <path d="M11 14H6.5a2.5 2.5 0 0 0 0 5h7a5 5 0 0 0 4.5-2.8L20 12" />
        <path d="M3 13l3 1" />
        <path d="M13 10h3a2 2 0 0 1 2 2" />
      </svg>
    ),
  },
  {
    key: 'wallet',
    label: 'Wallet',
    className: styles.icon_5,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3" />
        <path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-4a2 2 0 0 0 0 4h5" />
      </svg>
    ),
  },
  {
    key: 'life-buoy',
    label: 'Support',
    className: styles.icon_6,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M19.1 4.9l-4.2 4.2M9.1 14.9l-4.2 4.2" />
      </svg>
    ),
  },
  {
    key: 'circle-help',
    label: 'Help',
    className: styles.icon_7,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.7-2.3 2-2.3 3.5" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    key: 'hand-helping',
    label: 'Volunteer',
    className: styles.icon_8,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 14H6.5a2.5 2.5 0 0 0 0 5h7a5 5 0 0 0 4.5-2.8L20 12" />
        <path d="M3 13l3 1" />
        <path d="M13 10h3a2 2 0 0 1 2 2" />
        <path d="M8 10V6a2 2 0 0 1 2-2h2l4 3" />
      </svg>
    ),
  },
  {
    key: 'gift-heart',
    label: 'Gift of Love',
    className: styles.icon_9,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 12v9" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M12 8c-3-3-7-1-7 2.2M12 8c3-3 7-1 7 2.2" />
      </svg>
    ),
  },
  {
    key: 'coins',
    label: 'Coins',
    className: styles.icon_10,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="9" cy="7" rx="6" ry="3" />
        <path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
        <path d="M9 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        <ellipse cx="15" cy="12" rx="6" ry="3" />
      </svg>
    ),
  },
  {
    key: 'headset',
    label: 'Contact Support',
    className: styles.icon_11,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
        <path d="M19 19v1a3 3 0 0 1-3 3h-2" />
      </svg>
    ),
  },
  {
    key: 'donation-box',
    label: 'Charity',
    className: styles.icon_12,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" />
        <path d="M2 7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3H2V7z" />
        <path d="M12 6V3M9.5 4.5 12 6l2.5-1.5" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
];

const DonateContent = () => {
  return (
    <div id="donation-form">
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className={styles.inner}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-8 lg:col-span-9">
            <div className={styles.left}>
              <div className={classNames(styles.card, styles.donation_container)} >
                <div className={styles.glass_bg} aria-hidden="true">
                  <span className={styles.blob_1} />
                  <span className={styles.blob_2} />
                  <span className={styles.blob_3} />
                </div>

                <div className={styles.icons_layer} aria-hidden="true">
                  {donationIcons.map((item) => (
                    <span
                      key={item.key}
                      className={classNames(styles.floating_icon, item.className)}
                      title={item.label}
                    >
                      {item.svg}
                    </span>
                  ))}
                </div>

                <div className={styles.donation_msg_wrapper}>
                  <p>
                    You don't need a PayPal account, just proceed by selecting PayPal,
                    and at the end, you can choose "<span style={{fontWeight: `bold`}}>Pay with Debit or Credit Card</span>".
                  </p>
                </div>
                <div className={styles.form_highlight}>
                  <DonateForm />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <div className={styles.right}>
              <div className="grid grid-cols-1 gap-8">

                <div className={styles.card}>
                  <p style={{ fontSize: `1em`, marginBottom: `1rem` }}>
                    Your monthly donation plays a crucial role in supporting our mission to spread Da'wah. <span className={aboutStyles.highlight}>Jazakallahu Khairan</span>.
                  </p>
                </div>

                <div className={styles.card}>
                  <p style={{ fontSize: `1em`, marginBottom: `1rem` }}>
                    We do not save card information. This is secure payment gateway, powered by
                    <span style={{ color: `#1377FD` }}><a href="https://donorbox.org" target="_blank" > Donorbox</a></span> &
                    <span style={{ color: `#1377FD` }}><a href="https://www.paypal.com/" target="_blank" > Paypal</a></span>.
                  </p>
                </div>

                <div className={styles.card}>
                  <p style={{ fontSize: `1em`, marginBottom: `1rem` }}>
                    Many other brothers and sisters can get into here just by your one share.
                  </p>
                  <div>
                    <Share
                        urlWeb={`donate#donation-form`}
                        urlMobile={`donate#donation-form`}
                        title="Donation | DeeniInfoTech.com | A non-profit Software Development organization to spread the message of Islam worldwide"
                    />
                  </div>
                </div>

                <div className={styles.card}>
                  <p style={{ fontSize: `1em`, marginBottom: `1rem` }}>
                    Do you have any inquiry or don’t have any option to donate online?
                  </p>
                  <span style={{ fontSize: `1em`, display: `block` }}>
                    Please <span style={{ color: `#1377FD` }}> <Link href="/contact">contact with us</Link></span>
                  </span>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
};

export default DonateContent;
