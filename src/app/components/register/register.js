import React from 'react';
import styles from '../../style/components/register.module.css';

const Register = () => {
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.formContainer}>
        <img
          src="/images/png-transparent-logo-social-media-follow-on-instagram-text-logo-social-media-removebg-preview.png"  
          alt="Instagram Logo"
          className={styles.logo}
        />
        <h2 className={styles.heading}>Sign up to see photos and videos from your friends.</h2>
        <button className={styles.facebookLogin}>
          <i className="fab fa-facebook"></i> Log in with Facebook
        </button>
        <div className={styles.separator}>OR</div>
        <form>
          <input type="text" placeholder="Mobile Number or Email" className={styles.inputField} />
          <input type="text" placeholder="Full Name" className={styles.inputField} />
          <input type="text" placeholder="Username" className={styles.inputField} />
          <input type="password" placeholder="Password" className={styles.inputField} />
          <p className={styles.terms}>
            People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a>
          </p>
          <p className={styles.terms}>
            By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
          </p>
          <button type="submit" className={styles.signupBtn}>Sign up</button>
        </form>
      </div>
      <div className={styles.loginLink}>
        <p>Have an account? <a href="#">Log in</a></p>
      </div>
    </div>
  );
};

export default Register;
