import { createContext, ReactNode, useContext, useState } from "react";
import { Item } from '../types/Item';

type ListContextType = {
    list: Item[],
    setList: Function
}

type ListProviderProps = {
    children: ReactNode;
}

const ListContext = createContext({} as ListContextType);

export function ListProvider({children}:ListProviderProps){
    const [ list,setList ] = useState<Item[]>([]);

    return(
        <ListContext.Provider value={{list,setList}}>
            {children}
        </ListContext.Provider>
    )
}

export const useList = () => useContext(ListContext);