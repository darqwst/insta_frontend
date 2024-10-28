import React from 'react';
import styles from '../../style/components/profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <img
          src="/images/Profile-Pic.png" 
          alt="Profile Avatar"
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h2 className={styles.username}>terrylucas</h2>
          <button className={styles.followButton}>Follow</button>
        </div>
        <div className={styles.stats}>
          <span><strong>1,258</strong> posts</span>
          <span><strong>4M</strong> followers</span>
          <span><strong>1,250</strong> following</span>
        </div>
        <p className={styles.fullName}>Terry Lucas</p>
      </header>
      
      <div className={styles.postsGrid}>
        <img src="/images/My-Post1.png" alt="Post 1" className={styles.post} />
        <img src="/images/My-Post2.png" alt="Post 2" className={styles.post} />
        <img src="/images/My-Post3.png" alt="Post 3" className={styles.post} />
        <img src="/images/My-Post4.png" alt="Post 4" className={styles.post} />
        <img src="/images/My-Post5.png" alt="Post 5" className={styles.post} />
        <img src="/images/My-Post6.png" alt="Post 6" className={styles.post} />
      </div>
    </div>
  );
};

export default Profile;
