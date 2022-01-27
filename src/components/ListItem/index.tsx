import { useList } from '../../contexts/ListContext';
import { Item } from '../../types/Item';

import { 
    ListItemBox,
    ListItemChecker,
    ListItemText
} from './styles'

type ListItemProps = {
    item: Item,
    index: number,
}

export function ListItem({item,index}: ListItemProps) {
    
    const { list,setList} = useList();

    const handleCheckBox = () => {
        let newList = [...list]
        newList[index].done = !newList[index].done
        setList(newList);
    }

    return (
        <ListItemBox>
            <ListItemChecker type="checkbox" onChange={handleCheckBox} checked={item.done}/>
            <ListItemText>{item.text}</ListItemText>
        </ListItemBox>
    );
}