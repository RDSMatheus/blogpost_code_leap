import { useAuth } from '../../hooks/useAuth';
import { usePosts } from '../../hooks/usePosts';
import Form from '../Form/Form';

const FeedForm = () => {
  const { createPost } = usePosts();
  const { state } = useAuth();

  return (
    <>
      <Form
        borderColor="#7695EC"
        buttonColor="#7695EC"
        btntextTransform="capitalize"
        confirmBtnTxt="create"
        fontColor="#fff"
        showCancel={false}
        formTitle="What’s on your mind?"
        handleSubmit={async (title, content) => {
          return await createPost({ title, content, username: state });
        }}
        inputLabel="Title"
        textAreaLabel="Content"
      />
    </>
  );
};

export default FeedForm;
