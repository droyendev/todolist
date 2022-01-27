import { useState } from 'react';
import { useList } from '../../contexts/ListContext';
import plusIcon from '../../assets/plus.svg';

import {
    Main,
    TitleArea,
    Title,
    ListArea,
    AddArea,
    AddImage,
    AddInput
} from './styles'
import { ListItem } from '../ListItem';


export function Container() {
    const { list,setList } = useList();
    const [ input,setInput ] = useState('');

    const createList = () => {
        let newList = [...list];

        newList.push({
            id: list.length + 1,
            text: input,
            done: false,
        })

        setList(newList);
        setInput('');
    }

    const handleCreateNewList = () => {
        if( input.trim() === '' ) return;
        createList();
    }

    return (
        <Main>
            <TitleArea>
                <Title>Lista de Tarefas</Title>
            </TitleArea>
            <ListArea>
                <AddArea>
                    <AddImage onClick={handleCreateNewList} src={plusIcon} alt='Add list icon'/>
                    <AddInput
                        type="text"
                        placeholder='Adicione uma tarefa'
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        onKeyUp={(e) => {
                            if( e.code === 'Enter' && input.trim() !== ''){
                                createList();
                            }
                        }}
                    />
                </AddArea>
                {list.length > 0 && list.map((item, index) => (
                    <ListItem item={item} key={index} index={index}/>
                ))}
            </ListArea>
        </Main>
    );
}