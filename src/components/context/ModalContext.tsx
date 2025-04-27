import { createContext, PropsWithChildren, useState } from 'react';
import { ModalContextType } from '../../types/types';

export const ContextModal = createContext<ModalContextType | null>(null);

export const ModalContext = ({ children }: PropsWithChildren) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [deletePostId, setDeletePostId] = useState<number | null>(null);

  return (
    <ContextModal.Provider
      value={{
        openEditModal,
        setOpenEditModal,
        editingPostId,
        setEditingPostId,
        deletePostId,
        openDeleteModal,
        setDeletePostId,
        setOpenDeleteModal,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
};
