import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { useModal } from '../../hooks/useModal';
import { usePosts } from '../../hooks/usePosts';

const EditModal = () => {
  const { openEditModal, editingPostId, setOpenEditModal } = useModal();
  const { updatePost } = usePosts();

  return (
    <Modal isOpen={openEditModal}>
      <Form
        btntextTransform="capitalize"
        borderColor="#47B960"
        buttonColor="#47B960"
        confirmBtnTxt="save"
        btnCancelBorder="#000"
        btnCancelColor="#fff"
        showCancel
        cancelBtnTxt="Cancel"
        formTitle="Edit Item"
        inputLabel="Title"
        textAreaLabel="Content"
        fontColor="#fff"
        fontColorCancel="#000"
        handleSubmit={async (title, content) => {
          if (editingPostId !== null) {
            const response = await updatePost(editingPostId, title, content);
            if (response) setOpenEditModal(false);
            return response;
          }
          throw new Error('Editing post ID is null');
        }}
        closeModal={() => setOpenEditModal(false)}
      />
    </Modal>
  );
};

export default EditModal;
