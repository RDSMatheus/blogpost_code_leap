import { UseData } from '../../Context';
import Form from '../Form/Form';

const FeedForm = () => {
  const { postData, state } = UseData();

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
          return await postData({ title, content, username: state });
        }}
        inputLabel="Title"
        textAreaLabel="Content"
        
      />
    </>
  );
};

export default FeedForm;
