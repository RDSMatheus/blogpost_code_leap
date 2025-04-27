import { PropsWithChildren } from 'react';
import styles from './Skeleton.module.css';

const Skeleton = ({
  children,
  activeSkeleton,
}: PropsWithChildren<{ activeSkeleton: boolean }>) => {
  return (
    <div className={styles.skeletonWrapper}>
      {activeSkeleton && <div className={styles.skeleton}></div>}
      <div
        className={styles.skeletonContent}
        style={{ opacity: activeSkeleton ? 0 : 1 }}
      >
        {children}
      </div>
    </div>
  );
};

export default Skeleton;
