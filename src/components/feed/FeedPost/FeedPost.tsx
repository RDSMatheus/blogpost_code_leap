import styles from './FeedPost.module.css';
import deleteIcon from '../../../assets/ic_baseline-delete-forever.svg';
import editIcon from '../../../assets/bx_bx-edit.svg';
import { usePosts } from '../../../hooks/usePosts';
import { useModal } from '../../../hooks/useModal';
import { useAuth } from '../../../hooks/useAuth';
import useInfiniteScroll from './../../../hooks/useInfiniteScroll';
import { useEffect, useRef, useState } from 'react';

const FeedPost = () => {
  const { posts, getPosts } = usePosts();
  const {
    setEditingPostId,
    setOpenEditModal,
    setDeletePostId,
    setOpenDeleteModal,
  } = useModal();
  const { state } = useAuth();
  const isValidNext = typeof posts?.next === 'string';
  const [flashId, setFlashId] = useState<number | null>(null);
  const ref = useInfiniteScroll(isValidNext, () => {
    if (posts?.next) getPosts(posts.next);
  });
  const prevFirst = useRef(posts?.results[0]?.id);

  useEffect(() => {
    if (!posts || posts.results.length === 0) return;

    const currentFirst = posts.results[0].id;

    if (!currentFirst) return;

    if (prevFirst.current && currentFirst !== prevFirst.current) {
      setFlashId(currentFirst);
      setTimeout(() => setFlashId(null), 300);
    }
    prevFirst.current = currentFirst;
  }, [posts]);

  const dateFormat = (date: string) => {
    const currentDate = new Date();
    const postDate = new Date(date);
    const diffMilliseconds = currentDate.getTime() - postDate.getTime();
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    let timeAgo = '';

    if (diffDays > 0)
      return (timeAgo = `${diffDays} day${diffDays > 1 ? 's' : ''}`);

    if (diffHours > 0)
      return (timeAgo = `${diffHours} hour${diffHours > 1 ? 's' : ''}`);

    if (diffMinutes > 0)
      return (timeAgo = `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`);
    else timeAgo = 'Posted now';
    return timeAgo;
  };

  if (posts) {
    return (
      <section className={styles.feePost}>
        {posts.results.map((post, index) => (
          <section
            key={`${post.id} ${index}`}
            className={`${styles.post} ${
              post.id === flashId ? styles.animateNew : ''
            }`}
          >
            <div className={styles.header}>
              <h3>{post.title}</h3>
              {post.username === state && (
                <div className={styles.buttonsWrapper}>
                  <button
                    onClick={() => {
                      if (post.id !== undefined) setDeletePostId(post.id);
                      setOpenDeleteModal(true);
                    }}
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                  <button
                    onClick={() => {
                      if (post.id !== undefined) setEditingPostId(post.id);
                      setOpenEditModal(true);
                    }}
                  >
                    <img src={editIcon} alt="Edit" />
                  </button>
                </div>
              )}
            </div>
            <div className={styles.postBody}>
              <div className={styles.postHeader}>
                <span>@{post.username}</span>
                <span>
                  {post.created_datetime
                    ? dateFormat(post.created_datetime)
                    : ''}
                </span>
              </div>
              <p>{post.content}</p>
            </div>
          </section>
        ))}
        <div ref={ref}></div>
      </section>
    );
  }
  return null;
};

export default FeedPost;
