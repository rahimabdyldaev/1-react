import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import  About  from './pages/About/About'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Navbar />} path='/' >
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about/:id' element={<About />}></Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;