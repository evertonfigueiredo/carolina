import Home from "./components/pages/Home";
import Planos from "./components/pages/Planos";
import Login from "./components/pages/Login";
import CadastroVendedor from "./components/pages/CadastroVendedor";
import Kanban from "./components/pages/Kanban";
import Orcamento from "./components/pages/Orcamento";
import "./css/index.css";
import "./css/planos.css";
import "./css/login.css";
import "./css/modelo.css";
import "./css/kanban.css";



import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planos" element={<Planos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Kanban />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/cadastro-vendedor" element={<CadastroVendedor />} />
      <Route path="/orcamento" element={<Orcamento />} />
    </Routes>

  )
}

export default App;
