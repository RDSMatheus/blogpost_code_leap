import Modal from '../../Modal/Modal';
import { useModal } from '../../../hooks/useModal';
import Button from '../../common/Button/Button';
import styles from './DeleteModal.module.css';
import { FormEvent } from 'react';
import { usePosts } from '../../../hooks/usePosts';

const DeleteModal = () => {
  const { openDeleteModal, setOpenDeleteModal, deletePostId, setDeletePostId } =
    useModal();
  const { deletePost } = usePosts();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!deletePostId) return null;

    const response = await deletePost(deletePostId);
    
    if (response) {
      setOpenDeleteModal(false);
      setDeletePostId(null);
    }
  }

  return (
    <Modal isOpen={openDeleteModal}>
      <div className={styles.deleteModal}>
        <h3>Are you sure you want to delete this item?</h3>
        <form className={styles.btnWrapper} onSubmit={handleSubmit}>
          <Button
            borderColor="#000"
            buttonColor="#fff"
            fontColor="#000"
            textTransform="capitalize"
            values={[]}
            close={() => setOpenDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button
            borderColor="#FF5151"
            buttonColor="#FF5151"
            fontColor="#fff"
            textTransform="capitalize"
            values={[]}
          >
            Delete
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default DeleteModal;
