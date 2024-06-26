import Login from './components/login';
import RegistroForm from './components/registro';
import Home from './components/home';
import Dashboard from './components/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Productos from './components/Productos';
import Administrador from './components/Admin';
import ProductForm from './components/Nuevo_Producto';
import ModificarProductoForm from './components/Modificar_producto';
import SobreNosotros from './components/SobreNosotros';
import Productos2 from './components/Productos2';


function App() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegistroForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/Admin" element={<Administrador />} />
                    <Route path="/NewProduct" element={<ProductForm />} />
                    <Route path="/Modificar" element={<ModificarProductoForm />} />
                    <Route path="/Historia" element={<SobreNosotros />} />
                    <Route path="/ProductosUser" element={<Productos2 />} />
                    

                    
                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;