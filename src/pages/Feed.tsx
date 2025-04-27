import { Helmet } from 'react-helmet-async';
import FeedWrapper from '../components/feed/FeedWrapper/FeedWrapper';

const Feed = () => {
  return (
    <main>
      <Helmet>
        <title>CodeLeap | Feed</title>
      </Helmet>
      <FeedWrapper />
    </main>
  );
};

export default Feed;
