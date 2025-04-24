import React from 'react';
import { IPost, IPosts } from './types/types';
import {
  deleteData,
  getPosts,
  postData,
  updateData,
} from './services/services';

interface PostsContextType {
  createPost: (body: IPost) => Promise<boolean>;
  deletePost: (id: number) => Promise<boolean | null>;
  updatePost: (id: number, title: string, content: string) => Promise<boolean>;
  posts: IPosts | null;
  setPosts: React.Dispatch<React.SetStateAction<IPosts | null>>;
}

export const ContextPosts = React.createContext<PostsContextType | null>(null);

export const PostsContext = ({ children }: React.PropsWithChildren) => {
  const [posts, setPosts] = React.useState<null | IPosts>(null);

  async function deletePost(id: number): Promise<boolean> {
    const { response } = await deleteData(id);
    if (response) {
      const { data } = await getPosts();
      setPosts(data);
    }
    return response;
  }

  async function updatePost(id: number, title: string, content: string) {
    const body = { title, content };
    const { response } = await updateData(id, body);
    if (response) {
      const { data } = await getPosts();
      setPosts(data);
    }
    return response;
  }

  async function createPost(body: IPost) {
    const { response } = await postData(body);
    if (response) {
      const { data } = await getPosts();
      setPosts(data);
    }
    return response;
  }

  React.useEffect(() => {
    (async function () {
      const { data, response } = await getPosts();
      if (response) setPosts(data);
    })();
  }, []);

  return (
    <ContextPosts.Provider
      value={{
        createPost,
        posts,
        setPosts,
        deletePost,
        updatePost,
      }}
    >
      {children}
    </ContextPosts.Provider>
  );
};
