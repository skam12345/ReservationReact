import React, { ReactNode, createContext, useContext, useState } from 'react';

interface IdProps {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

interface childrenProps {
  children: ReactNode;
}
const IdContext = createContext<IdProps | undefined>(undefined);

const IdProvider = ({ children }: childrenProps) => {
  const [id, setId] = useState<string>('');
  return (
    <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>
  );
};

const useIdContext = () => {
  const context = useContext(IdContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};

export { IdContext, IdProvider, useIdContext };
