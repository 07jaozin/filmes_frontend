import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Index } from './pages/Index';
import { Filme } from './pages/Filme';
import Login from './pages/Login';
import { Pesquisar } from './pages/Pesquisar';
import { Gerenciamento } from './pages/Gerenciamento';
import { Perfil } from './pages/Perfil';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/filme/:id' element={<Filme />} />
          <Route path='/Login/' element={<Login />} />
          <Route path='/pesquisa' element={<Pesquisar />} />
          <Route path='/gerenciamento' element={<Gerenciamento />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
