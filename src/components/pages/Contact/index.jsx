import { useState, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Section from '../../utils/Section';
import FacebookIcon from '../../icons/Facebook';
import YoutubeIcon from '../../icons/Youtube';
import styles from './index.module.scss';

const ContactForm = () => {
  //snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  // contact
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const nameEl = useRef(null);
  const subjectEl = useRef(null);
  const emailEl = useRef(null);
  const phoneEl = useRef(null);
  const messageEl = useRef(null);

  const handleNameChange = (e) => {
    e.target.classList.remove(styles.error);
    setName(e.target.value.trim());
  };

  const handleSubjectChange = (e) => {
    e.target.classList.remove(styles.error);
    setSubject(e.target.value.trim());
  };

  const handleEmailChange = (e) => {
    e.target.classList.remove(styles.error);
    setEmail(e.target.value.trim());
  };

  const handlePhoneChange = (e) => {
    e.target.classList.remove(styles.error);
    setPhone(e.target.value.trim());
  };

  const handleMessageChange = (e) => {
    e.target.classList.remove(styles.error);
    setMessage(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log('Sending')

    let error = false;

    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (name === '') {
      nameEl.current.classList.add(styles.error);
      error = true;
    }

    // if (subject === '') {
    // 	subjectEl.current.classList.add(styles.error)
    // 	error = true
    // }

    if (email === '') {
      emailEl.current.classList.add(styles.error);
      error = true;
    }

    if (!pattern.test(email)) {
      emailEl.current.classList.add(styles.error);
      error = true;
    }

    // if (phone === '') {
    // 	phoneEl.current.classList.add(styles.error)
    // 	error = true
    // }

    if (message === '') {
      messageEl.current.classList.add(styles.error);
      error = true;
    }

    if (error) return;

    let data = {
      name,
      subject,
      email,
      phone,
      message,
    };

    fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      //console.log('Response received')
      if (res.status === 200) {
        //console.log(res)
        setName('');
        setSubject('');
        setEmail('');
        setPhone('');
        setMessage('');

        nameEl.current.value = '';
        subjectEl.current.value = '';
        emailEl.current.value = '';
        phoneEl.current.value = '';
        messageEl.current.value = '';

        setSnackbarOpen(true);
      }
    });
  };

  return (
    <Section
      classes={{
        root: styles.root,
        container: styles.container,
        content: styles.content,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-1 lg:col-span-8 xl:col-span-9">
          <div className={styles.left}>
            <div className={styles.top}>
              <h1>Contact</h1>
              <p>
                Please feel free to contact me at your convenience. You can
                email to contact us.
              </p>
            </div>

            <form
              className={styles.form}
              action=""
              method="POST"
              onSubmit={(e) => handleSubmit(e)}
            >
              {/* <div className={styles.top}>
                <h1>Contact</h1>
                <p>
                  Please feel free to contact me at your convenience. You can
                  email to contact us.
                </p>
              </div> */}

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6">
                  <div className={styles.input}>
                    <p>Your name</p>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => handleNameChange(e)}
                      ref={nameEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className={styles.input}>
                    <p>Subject</p>
                    <input
                      type="text"
                      name="subject"
                      onChange={(e) => handleSubjectChange(e)}
                      ref={subjectEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className={styles.input}>
                    <p>Email</p>
                    <input
                      type="text"
                      name="email"
                      placeholder="email@example.com"
                      onChange={(e) => handleEmailChange(e)}
                      ref={emailEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className={styles.input}>
                    <p>Phone</p>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+880 1xxxxxxxxx"
                      onChange={(e) => handlePhoneChange(e)}
                      ref={phoneEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-12">
                  <div className={styles.input}>
                    <p>Your message</p>
                    <textarea
                      name="message"
                      onChange={(e) => handleMessageChange(e)}
                      ref={messageEl}
                    ></textarea>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-12">
                  <div className={styles.input}>
                    <button
                      className={styles.btn} //
                      type="submit"
                      name="contact"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 xl:col-span-3">
          <div
            className={classNames(styles.right, 'grid', 'grid-cols-1', 'gap-8')}
          >
            <div className={classNames(styles.profile, styles.card)}>
              <div className={styles.image}>
                <Image
                  src={`/img/apps/logo01.png`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  loading="eager"
                />
              </div>

              <h2 className={styles.name}>Deeni Info Tech</h2>

              <ul className={styles.social}>
                <li>
                  <a
                    href="https://www.facebook.com/AbubakarMdZakaria"
                    // target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/AbubakarMdZakaria"
                    // target="_blank"
                  >
                    <YoutubeIcon />
                  </a>
                </li>
              </ul>
            </div>

            <div className={classNames(styles.address, styles.card)}>
              <p>Our address</p>
              <ul>
                <li>
                  <a
                    href="mailto:deeniinfotech@gmail.com"
                    // target="_blank"
                  >
                    <span title="deeniinfotech@gmail.com">
                      deeniinfotech@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
