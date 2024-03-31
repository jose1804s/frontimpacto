import Login from './components/login';
import RegistroForm from './components/registro';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegistroForm />} />
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;