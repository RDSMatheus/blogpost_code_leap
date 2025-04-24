import React from 'react';

interface ModalContextType {
  openEditModal: boolean;
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  editingPostId: number | null;
  setEditingPostId: React.Dispatch<React.SetStateAction<number | null>>;
}

export const ContextModal = React.createContext<ModalContextType | null>(null);

export const ModalContext = ({ children }: React.PropsWithChildren) => {
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [editingPostId, setEditingPostId] = React.useState<number | null>(null);

  return (
    <ContextModal.Provider
      value={{
        openEditModal,
        setOpenEditModal,
        editingPostId,
        setEditingPostId,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
};
