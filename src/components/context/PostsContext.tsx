import { IPost, IPosts, PostsContextType } from '../../types/types';
import {
  deleteData,
  getData,
  postData,
  updateData,
} from '../../services/services';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

export const ContextPosts = createContext<PostsContextType | null>(null);

export const PostsContext = ({ children }: PropsWithChildren) => {
  const [posts, setPosts] = useState<null | IPosts>(null);
  const [loading, setLoading] = useState(false);

  async function deletePost(id: number): Promise<boolean> {
    setLoading(true);
    const { response } = await deleteData(id);
    if (response) {
      const { data } = await getData();
      setPosts(data);
    }
    setLoading(false);
    return response;
  }

  async function updatePost(id: number, title: string, content: string) {
    setLoading(true);
    const body = { title, content };
    const { response } = await updateData(id, body);
    if (response) {
      const { data } = await getData();
      setPosts(data);
    }
    setLoading(false);
    return response;
  }

  async function createPost(body: IPost) {
    setLoading(true);
    const { response } = await postData(body);
    if (response) {
      const { data } = await getData();
      setPosts(data);
    }
    setLoading(false);
    return response;
  }

  const getPosts = useCallback(async (url?: string) => {
    setLoading(true);
    const { data, response } = await getData(url);
    if (!response) return;

    setPosts((prev) => {
      if (!prev) return data;

      const newPosts = [...prev.results, ...data.results];

      const uniquePosts = Array.from(
        new Map(newPosts.map((post) => [post.id, post])).values(),
      );

      return {
        ...data,
        results: uniquePosts,
      };
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <ContextPosts.Provider
      value={{
        loading,
        createPost,
        posts,
        setPosts,
        deletePost,
        updatePost,
        getPosts,
      }}
    >
      {children}
    </ContextPosts.Provider>
  );
};
