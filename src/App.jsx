import Login from './components/login';
import RegistroForm from './components/registro';
import Home from './components/home';
import Dashboard from './components/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegistroForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;