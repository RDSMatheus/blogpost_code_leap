import { useAuth } from '../../../hooks/useAuth';
import { usePosts } from '../../../hooks/usePosts';
import Form from '../../common/Form/Form';

const FeedForm = () => {
  const { createPost } = usePosts();
  const { state } = useAuth();

  async function handleSubmit(title: string, content: string) {
    return await createPost({ title, content, username: state });
  }

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
        handleSubmit={handleSubmit}
        inputLabel="Title"
        textAreaLabel="Content"
      />
    </>
  );
};

export default FeedForm;
