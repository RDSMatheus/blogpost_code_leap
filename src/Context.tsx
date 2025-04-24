import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

interface IContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  postData: (body: IPost) => Promise<boolean | null>;
  deletePost: (id: number) => Promise<boolean | null>;
  updatePost: (
    id: number,
    title: string,
    content: string,
  ) => Promise<boolean | null>;
  posts: IPosts | null;
  setPosts: React.Dispatch<React.SetStateAction<IPosts | null>>;
  logout: () => void;
  openEditModal: boolean;
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editingPostId: number | null;
  setEditingPostId: React.Dispatch<React.SetStateAction<number | null>>;
}

interface IPosts {
  count: number;
  next: null;
  previous: null;
  results: IPost[];
}

interface IPost {
  username: string;
  title: string;
  content: string;
  id?: number;
  author_ip?: string;
  created_datetime?: string;
}

const Context = React.createContext<IContextType | null>(null);

export const UseData = () => {
  const context = React.useContext(Context);
  if (!context) throw new Error('UseData precisa estar dentro de um provider');
  return context;
};

export const GlobalContext = ({ children }: React.PropsWithChildren) => {
  const { state, setState } = useLocalStorage('username', '');
  const [isLogged, setIsLogged] = React.useState(false);
  const [posts, setPosts] = React.useState<null | IPosts>(null);
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [editingPostId, setEditingPostId] = React.useState<number | null>(null);
  const navigate = useNavigate();

  function logout() {
    setIsLogged(false);
    setState('');
  }

  React.useEffect(() => {
    if (state) setIsLogged(true);
  }, [state]);

  React.useEffect(() => {
    if (isLogged) navigate('/feed');
  }, [isLogged, navigate]);

  async function deletePost(id: number) {
    try {
      const response = await fetch(
        `https://dev.codeleap.co.uk/careers/${id}/`,
        {
          method: 'DELETE',
        },
      );
      if (response.ok)
        setPosts((prev) =>
          prev
            ? {
                ...prev,
                results: prev.results.filter((post) => post.id !== id),
                count: prev.count - 1,
              }
            : prev,
        );
      return response.ok;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error: ', error);
      }
      return null;
    }
  }

  async function updatePost(id: number, title: string, content: string) {
    const body = { title, content };
    try {
      const response = await fetch(
        `https://dev.codeleap.co.uk/careers/${id}/`,
        {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      if (response.ok)
        setPosts((prev) =>
          prev
            ? { ...prev, results: [data, ...prev.results] }
            : { count: 1, next: null, previous: null, results: [data] },
        );
      return response.ok;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error: ', error);
      }
      return null;
    }
  }

  async function postData(body: IPost) {
    try {
      const response = await fetch('https://dev.codeleap.co.uk/careers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (response.ok)
        setPosts((prev) =>
          prev
            ? {
                ...prev,
                results: [data, ...prev.results],
                count: prev.count + 1,
              }
            : {
                count: 1,
                next: null,
                previous: null,
                results: [data],
              },
        );
      return response.ok;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error: ', error);
      }
      return null;
    }
  }

  React.useEffect(() => {
    async function getPost() {
      try {
        const response = await fetch('https://dev.codeleap.co.uk/careers/');
        const data = await response.json();
        if (response.ok) setPosts(data);
        console.log(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log('Unexpected error: ', error);
        }
      }
    }
    getPost();
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        setState,
        isLogged,
        setIsLogged,
        postData,
        posts,
        setPosts,
        deletePost,
        logout,
        openEditModal,
        setOpenEditModal,
        updatePost,
        editingPostId,
        setEditingPostId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
