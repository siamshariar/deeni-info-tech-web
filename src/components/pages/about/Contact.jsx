import { useState, useRef } from 'react';
import styles from './Contact.module.scss';

const ContactForm = () => {
  const [value, setValue] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const nameEl = useRef(null);
  const subjectEl = useRef(null);
  const emailEl = useRef(null);
  const phoneEl = useRef(null);
  const messageEl = useRef(null);

  const changeValue = (key, val) => {
    const newValue = { ...value, [key]: val };
    setValue(newValue);
  };

  const handleValueChange = (e, el, key) => {
    el.current.classList.remove(styles.error);
    changeValue(key, e.target.value.trim());
    // console.log(value);
  };

  const handleFocusIn = (e, el) => {
    el.current.classList.add(styles.active);
    el.current.classList.add(styles.focused);
  };

  const handleFocusOut = (e, el) => {
    el.current.classList.remove(styles.active);
    if (e.target.value.trim() == '') {
      el.current.classList.remove(styles.focused);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Sending");

    let error = false;

    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (value.name === '') {
      nameEl.current.classList.add(styles.error);
      error = true;
    }

    // if (value.subject === "") {
    //   subjectEl.current.classList.add(styles.error);
    //   error = true;
    // }

    if (value.email === '') {
      emailEl.current.classList.add(styles.error);
      error = true;
    }

    if (!pattern.test(value.email)) {
      emailEl.current.classList.add(styles.error);
      error = true;
    }

    // if (value.phone === "") {
    //   phoneEl.current.classList.add(styles.error);
    //   error = true;
    // }

    if (value.message === '') {
      messageEl.current.classList.add(styles.error);
      error = true;
    }

    if (error) return;

    let data = {
      name: value.name,
      subject: value.subject,
      email: value.email,
      phone: value.phone,
      message: value.message,
    };

    fetch('/api/sendMail', {
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
          name: '',
          subject: '',
          email: '',
          phone: '',
          message: '',
        });

        nameEl.current.classList.remove(styles.focused);
        subjectEl.current.classList.remove(styles.focused);
        emailEl.current.classList.remove(styles.focused);
        phoneEl.current.classList.remove(styles.focused);
        messageEl.current.classList.remove(styles.focused);
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non harum
          sunt neque delectus
        </p>

        <form
          className={styles.form}
          action=""
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              className={`col-span-1 row-span-1 ${styles.input}`}
              ref={nameEl}
            >
              <span className={styles.label}>Name</span>
              <input
                type="text"
                name="name"
                autoComplete="off"
                onFocus={(e) => handleFocusIn(e, nameEl)}
                onBlur={(e) => handleFocusOut(e, nameEl)}
                onChange={(e) => handleValueChange(e, nameEl, 'name')}
                value={value.name}
              />
            </div>
            <div
              className={`col-span-1 row-span-1 ${styles.input}`}
              ref={subjectEl}
            >
              <span className={styles.label}>Subject</span>
              <input
                type="text"
                name="subject"
                autoComplete="off"
                onFocus={(e) => handleFocusIn(e, subjectEl)}
                onBlur={(e) => handleFocusOut(e, subjectEl)}
                onChange={(e) => handleValueChange(e, subjectEl, 'subject')}
                value={value.subject}
              />
            </div>
            <div
              className={`col-span-1 row-span-1 ${styles.input}`}
              ref={emailEl}
            >
              <span className={styles.label}>Email</span>
              <input
                type="text"
                name="email"
                autoComplete="off"
                onFocus={(e) => handleFocusIn(e, emailEl)}
                onBlur={(e) => handleFocusOut(e, emailEl)}
                onChange={(e) => handleValueChange(e, emailEl, 'email')}
                value={value.email}
              />
            </div>
            <div
              className={`col-span-1 row-span-1 ${styles.input}`}
              ref={phoneEl}
            >
              <span className={styles.label}>Phone</span>
              <input
                type="text"
                name="phone"
                autoComplete="off"
                onFocus={(e) => handleFocusIn(e, phoneEl)}
                onBlur={(e) => handleFocusOut(e, phoneEl)}
                onChange={(e) => handleValueChange(e, phoneEl, 'phone')}
                value={value.phone}
              />
            </div>
            <div
              className={`col-span-1 md:col-span-2 row-span-1 ${styles.input}`}
              ref={messageEl}
            >
              <span className={styles.label}>Message</span>
              <textarea
                rows="10"
                name="message"
                onFocus={(e) => handleFocusIn(e, messageEl)}
                onBlur={(e) => handleFocusOut(e, messageEl)}
                onChange={(e) => handleValueChange(e, messageEl, 'message')}
                value={value.message}
              ></textarea>
            </div>
            <button className={styles.btn} type="submit">
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
