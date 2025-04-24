import Modal from '../Modal/Modal';
import { UseData } from '../../Context';
import Form from '../Form/Form';

const EditModal = () => {
  const { openEditModal, updatePost, editingPostId, setOpenEditModal } =
    UseData();

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
