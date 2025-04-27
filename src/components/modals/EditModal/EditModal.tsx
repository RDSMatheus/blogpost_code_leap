import Modal from '../../Modal/Modal';
import Form from '../../common/Form/Form';
import { useModal } from '../../../hooks/useModal';
import { usePosts } from '../../../hooks/usePosts';

const EditModal = () => {
  const { openEditModal, editingPostId, setOpenEditModal } = useModal();
  const { updatePost, posts } = usePosts();
  const editingPost = posts
    ? posts.results.find((post) => post.id === editingPostId)
    : null;

  async function handleSubmit(title: string, content: string) {
    if (editingPostId === null) throw new Error('Editing post ID is null');

    const response = await updatePost(editingPostId, title, content);
    if (response) setOpenEditModal(false);
    return response;
  }

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
        titleEdit={editingPost?.title}
        contentEdit={editingPost?.content}
        cancelBtnTxt="Cancel"
        formTitle="Edit Item"
        inputLabel="Title"
        textAreaLabel="Content"
        fontColor="#fff"
        fontColorCancel="#000"
        handleSubmit={handleSubmit}
        closeModal={() => setOpenEditModal(false)}
      />
    </Modal>
  );
};

export default EditModal;
