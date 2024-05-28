"use client";

import React, { createContext, useState, ReactNode } from 'react';
import * as S from "@styles/common.style"

interface MyContextProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<string>('initialState');

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;