import { Container } from './components/Container';
import { useList } from './contexts/ListContext';

import GlobalStyles from './styles/global';

function App() {
    const { list } = useList();
    
    return (
        <div className="app">
            <GlobalStyles/>
            <Container/>
        </div>
    )
}

export default App
