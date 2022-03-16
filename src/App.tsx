import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contacts, Delivery, Main, Warranty } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/delivery' element={<Delivery />} />
                <Route path='/warranty' element={<Warranty />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
        </Router>
    );
}

export default App;
