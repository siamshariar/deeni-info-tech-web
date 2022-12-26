import Container from '../../utils/Container';
import styles from './index.module.scss';
import { useState, useRef } from 'react';

const Subscription = () => {

  const [value, setValue] = useState({
    email: '',
  });

  const emailEl = useRef(null);

  const changeValue = (key, val) => {
    const newValue = { ...value, [key]: val };
    setValue(newValue);
  };

  const handleValueChange = (e, key) => {
    // el.current.classList.remove(styles.error);
    e.target.classList.remove(styles.error);
    changeValue(key, e.target.value.trim());
    // console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = false;

    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;


    if (value.email === '') {
      emailEl.current.classList.add(styles.error);
      error = true;
    }

    if (!pattern.test(value.email)) {
      emailEl.current.classList.add(styles.error);
      error = true;
    }

    if (error) return;

    let data = {
      email: value.email,
    };

    fetch('/api/emailSub', {
    // fetch('https://ztechltd.com/w/dit-email-sub.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // console.log("Response received");
      if (res.status === 200) {
        // console.log(res);
        setValue({
          email: '',
        });
      }
    });

        // setValue({
        //   email: '',
        // });
  }

  return (
    <div className={styles.root}>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>
              <span>Get</span> in Touch
            </h2>
          </div>
          <div className={styles.text}>
            <p>
              Subscribe to receive email updates on features, new releases.
            </p>
          </div>
          <form
              className={styles.form}
              action=""
              method="POST"
              onSubmit={(e) => handleSubmit(e)}
          >
            <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => handleValueChange(e, 'email')}
                value={value.email}
                ref={emailEl}
            />
            <button type="submit" name="submit">
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
