import styles from './FeedWrapper.module.css';
import FeedHeader from '../FeedHeader/FeedHeader';
import FeedPost from '../FeedPost/FeedPost';
import EditModal from '../../modals/EditModal/EditModal';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
import FeedForm from '../../forms/FeedForm/FeedForm';
import { usePosts } from '../../../hooks/usePosts';
import Skeleton from '../../common/Skeleton/Skeleton';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const FeedWrapper = () => {
  const { loading } = usePosts();
  return (
    <section className={styles.wrapper}>
      <FeedHeader />
      <div className={styles.body}>
        <FeedForm />
        <FeedPost />
        <EditModal />
        <DeleteModal />
        <ScrollToTop />
        {loading && (
          <Skeleton activeSkeleton={loading}>
            <div style={{ height: '200px', width: '100%' }}></div>
          </Skeleton>
        )}
      </div>
    </section>
  );
};

export default FeedWrapper;
