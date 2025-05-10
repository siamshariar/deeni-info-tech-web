import Container from '../../utils/Container';
import styles from './index.module.scss';
import { useState, useRef } from 'react';

const Subscription = () => {

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const emailRef = useRef(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value.trim());
    e.target.classList.remove(styles.error);
    setSubscriptionStatus(null);
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailRef.current.classList.add(styles.error);
      return false;
    } else if (!emailPattern.test(email)) {
      emailRef.current.classList.add(styles.error);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscriptionStatus(null);

    if (!validateEmail()) {
      setIsSubmitting(false);
      setSubscriptionStatus('validation-error');
      return;
    }

    try {
      const response = await fetch('/api/emailSub', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

      // console.log("Response received");

      const data = await response.json();

      if (response.ok) {
        setEmail('');
        setSubscriptionStatus('success');
      } else {
        setSubscriptionStatus('error');
      }
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              ref={emailRef}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
          </form>

          {subscriptionStatus === 'success' && (
            <div className={styles.successMessage}>
              Thank you for subscribing!
            </div>
          )}
          
          {(subscriptionStatus === 'error' || subscriptionStatus === 'validation-error') && (
            <div className={styles.errorMessage}>
              Please enter a valid email address
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
