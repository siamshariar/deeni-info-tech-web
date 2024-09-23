// import classNames from 'classnames';
import Section from '../../utils/Section';
import styles from './index.module.scss';
import Link from "next/link";
import classNames from "classnames";

const DonateBDContent = () => {
  return (
    <div id="payment-information">
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
                <div style={{background: `unset !important`, padding: `32px`}}>
                  Bank: Al-Arafah Islami Bank Limited <br/>
                  Account No: 0311123609637 <br/>
                  Account Name: SK Ahtasham Billah Himel & Md Ismail Hossain <br/>
                  Branch: Dhanmondi Branch <br/>
                  SWIFT Code: ALAR BD DH 084 <br/>
                  Routing No : 015261184 <br/>
                </div>
                <div style={{background: `unset !important`, padding: `32px`}}>
                  bKash: 01985469798 <span style={{fontSize: `14px`}}>(Personal)</span><br/>
                  <span style={{fontSize: `14px`}}>(This number might switched off, but you can make your transfer.)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <div className={styles.right}>
              <div className="grid grid-cols-1 gap-8">

                <div className={styles.card}>
                  <p style={{fontSize: `1rem`, marginBottom: `1rem`}}>Contact email</p>
                  <ul>
                    <li>
                      <a
                          href="mailto:info@deeniinfotech.com"
                          // target="_blank"
                      >
                    <span title="info@deeniinfotech.com">
                      info@deeniinfotech.com
                    </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <p style={{ fontSize: `1em`, marginBottom: `1rem` }}>
                    Do you have any inquiry?
                  </p>
                  <span style={{ fontSize: `1em`, display: `block` }}>
                    Please <span style={{ color: `#1377FD` }}> <Link href="/contact">contact with us</Link></span>
                  </span>
                </div>

                <div className={styles.card}>
                  <p style={{ fontSize: `1em`, marginBottom: `1rem` }}>
                    Want to donate online?
                  </p>
                  <span style={{ fontSize: `1em`, display: `block` }}>
                    Please visit <span style={{ color: `#1377FD` }}> <Link href="/donate">donate page</Link></span>
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

export default DonateBDContent;
