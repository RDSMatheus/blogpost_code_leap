import styles from './FeedWrapper.module.css';
import FeedHeader from '../FeedHeader/FeedHeader';
import FeedForm from '../FeedForm/FeedForm';
import FeedPost from '../FeedPost/FeedPost';
import EditModal from '../EditModal/EditModal';

const FeedWrapper = () => {
  return (
    <section className={styles.wrapper}>
      <FeedHeader />
      <div className={styles.body}>
        <FeedForm />
        <FeedPost />
        <EditModal />
      </div>
    </section>
  );
};

export default FeedWrapper;
