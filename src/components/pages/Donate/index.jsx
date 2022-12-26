// import classNames from 'classnames';
import Section from '../../utils/Section';
import DonateForm from './Form';
import styles from './index.module.scss';
import Link from "next/link";
import Share from "../../social-share/share";
import classNames from "classnames";

const DonateContent = () => {
  return (
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
                <DonateForm />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <div className={styles.right}>
              <div className="grid grid-cols-1 gap-8">

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
                        urlWeb={`donate`}
                        urlMobile={`donate`}
                        title="Donation | DeeniInfoTech.com | A non-profit Software Development organization to spread Deen Islam worldwide"
                    />
                  </div>
                </div>

                <div className={styles.card}>
                  <p style={{ fontSize: `1em`, marginBottom: `1rem` }}>
                    Do you have any inquiry?
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
  );
};

export default DonateContent;
