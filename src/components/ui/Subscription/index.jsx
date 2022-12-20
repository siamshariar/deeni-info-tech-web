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

  const handleValueChange = (e, el, key) => {
    // el.current.classList.remove(styles.error);
    changeValue(key, e.target.value.trim());
    // console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
                onChange={(e) => handleValueChange(e, emailEl, 'email')}
                value={value.email}
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
