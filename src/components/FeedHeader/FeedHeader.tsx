import styles from './FeedHeader.module.css';
import logoutIcon from '../../assets/logout-svgrepo-com.svg';
import { UseData } from '../../Context';

const FeedHeader = () => {
  const { logout } = UseData();
  return (
    <header className={styles.header}>
      <p>CodeLeap Network</p>{' '}
      <button onClick={logout}>
        Logout
        <img src={logoutIcon} alt="Logout" />
      </button>
    </header>
  );
};

export default FeedHeader;
