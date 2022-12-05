import classNames from 'classnames';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Section from '../../utils/Section';
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
    e.target.classList.remove('error');
    setName(e.target.value.trim());
  };

  const handleSubjectChange = (e) => {
    e.target.classList.remove('error');
    setSubject(e.target.value.trim());
  };

  const handleEmailChange = (e) => {
    e.target.classList.remove('error');
    setEmail(e.target.value.trim());
  };

  const handlePhoneChange = (e) => {
    e.target.classList.remove('error');
    setPhone(e.target.value.trim());
  };

  const handleMessageChange = (e) => {
    e.target.classList.remove('error');
    setMessage(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log('Sending')

    let error = false;

    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (name === '') {
      nameEl.current.classList.add('error');
      error = true;
    }

    // if (subject === '') {
    // 	subjectEl.current.classList.add('error')
    // 	error = true
    // }

    if (email === '') {
      emailEl.current.classList.add('error');
      error = true;
    }

    if (!pattern.test(email)) {
      emailEl.current.classList.add('error');
      error = true;
    }

    // if (phone === '') {
    // 	phoneEl.current.classList.add('error')
    // 	error = true
    // }

    if (message === '') {
      messageEl.current.classList.add('error');
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
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9">
          <div className="contact-left">
            {/* <div className="contact-top">
                    <h1>যোগাযোগ করুন</h1>
                    <p>
                      আপনি যদি আপনার প্রশ্ন বা সমস্যার উত্তর না পেয়ে থাকেন, তবে
                      অনুগ্রহ করে নিচের ফর্ম ব্যবহার করে আমাদের সাথে যোগাযোগ
                      করুন এবং যত তাড়াতাড়ি সম্ভব আমরা আপনার সাথে যোগাযোগ করবো।
                    </p>
                  </div> */}

            <form
              className="contact-form"
              action=""
              method="POST"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="contact-top">
                <h1>যোগাযোগ করুন</h1>
                <p>আমাদের সাথে যোগাযোগ করার জন্যে ইমেইল করতে পারেন।</p>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <div className="contact-input">
                    <p>আপনার নাম</p>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => handleNameChange(e)}
                      ref={nameEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <div className="contact-input">
                    <p>বিষয়</p>
                    <input
                      type="text"
                      name="subject"
                      onChange={(e) => handleSubjectChange(e)}
                      ref={subjectEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <div className="contact-input">
                    <p>ইমেইল</p>
                    <input
                      type="text"
                      name="email"
                      placeholder="email@example.com"
                      onChange={(e) => handleEmailChange(e)}
                      ref={emailEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6">
                  <div className="contact-input">
                    <p>ফোন নাম্বার</p>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+880 1xxxxxxxxx"
                      onChange={(e) => handlePhoneChange(e)}
                      ref={phoneEl}
                    />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12">
                  <div className="contact-input">
                    <p>আপনার বার্তা</p>
                    <textarea
                      name="message"
                      onChange={(e) => handleMessageChange(e)}
                      ref={messageEl}
                    ></textarea>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12">
                  <div className="contact-input">
                    <button className="btn-r" type="submit" name="contact">
                      সাবমিট
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="contact-right">
            <div className="sidebar-profile sc-1">
              <div className="s-profile-image">
                <Image
                  src={`/img/apps/logo01.png`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  loading="eager"
                />
              </div>

              <h2 className="s-profile-name">ড. আবু বকর মুহাম্মাদ যাকারিয়া</h2>

              <ul className="s-profile-social">
                <li>
                  <a
                    href="https://www.facebook.com/AbubakarMdZakaria"
                    // target="_blank"
                  >
                    <i className="facebook fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/AbubakarMdZakaria"
                    // target="_blank"
                  >
                    <i className="youtube fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-address">
              <p>আমাদের সাথে যোগাযোগ করুন</p>
              <ul>
                <li>
                  <a
                    href="mailto:contact.mme.nu@gmail.com"
                    // target="_blank"
                  >
                    <span title="contact.mme.nu@gmail.com">
                      contact.mme.nu@gmail.com
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
