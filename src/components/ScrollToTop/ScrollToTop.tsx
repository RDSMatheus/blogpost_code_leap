import styles from './ScrollToTop.module.css';
import arrow from '../../assets/up-arrow-svgrepo-com.svg';

const ScrollToTop = () => {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smooth
    });
  }

  return (
    <button className={styles.scrollBtn} onClick={handleClick}>
      <img src={arrow} alt="Scroll to Top" />
    </button>
  );
};

export default ScrollToTop;
