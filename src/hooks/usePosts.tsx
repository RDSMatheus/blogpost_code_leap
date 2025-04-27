import { useContext } from 'react';
import { ContextPosts } from '../components/context/PostsContext';

export const usePosts = () => {
  const context = useContext(ContextPosts);
  if (!context) throw new Error('usePosts precisa estar dentro de um provider');
  return context;
};
