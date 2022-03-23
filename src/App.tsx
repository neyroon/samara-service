import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contacts, Delivery, Main, Warranty, Washer, Dishwasher, Fridge } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/delivery' element={<Delivery />} />
                <Route path='/warranty' element={<Warranty />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/washer' element={<Washer />} />
                <Route path='/dishwasher' element={<Dishwasher />} />
                <Route path='/fridge' element={<Fridge />} />
            </Routes>
        </Router>
    );
}

export default App;
