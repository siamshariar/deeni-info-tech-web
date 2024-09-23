import styles from './index.module.scss';

const DonateForm = () => {
  return (
    <div className={styles.form}>
        <div style={{ background: `url(img/loader.gif) center center no-repeat` }}>
          <iframe
            src="https://donorbox.org/embed/deeniinfotech?default_interval=m"
            name="donorbox"
            allowpaymentrequest="allowpaymentrequest"
            seamless="seamless"
            frameBorder="0"
            // scrolling="no"
            height="500px"
            // width="100%"
            style={{ maxHeight: `none !important` }}
          ></iframe>
        </div>
    </div>
  );
};

export default DonateForm;
