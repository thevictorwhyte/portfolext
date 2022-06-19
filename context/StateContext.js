import React, { createContext, useState, useContext } from "react";

const Context  = createContext();

export const StateContext = ({ children }) => { 
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmbedId, setCurrentEmbedId] = useState("S94KLPJvcvM");

    return <Context.Provider value={{
        isModalOpen,
        setIsModalOpen,
        currentEmbedId,
        setCurrentEmbedId
    }}>{children}</Context.Provider>
}

export const useStateContext = () => useContext(Context);