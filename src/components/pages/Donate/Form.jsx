import styles from './index.module.scss';

const DonateForm = () => {
  return (
    <div className={styles.form}>
      <iframe
        src="https://donorbox.org/embed/deeniinfotech?default_interval=o&hide_donation_meter=true"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        // height="900px"
        // width="100%"
      ></iframe>
    </div>
  );
};

export default DonateForm;
