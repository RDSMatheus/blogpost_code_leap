import { useContext } from 'react';
import { ContextPosts } from '../PostsContext';

export const usePosts = () => {
  const context = useContext(ContextPosts);
  if (!context) throw new Error('UseData precisa estar dentro de um provider');
  return context;
};
