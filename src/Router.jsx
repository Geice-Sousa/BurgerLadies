import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Atendente from './Components/Atendente';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import Admin from './Components/Admin';
import Ordered from './Components/Ordered';
import NovoPedido from './Components/NovoPedido';


function Router() {
  return (
	<BrowserRouter>
		<Header/>
		<Routes>
			<Route path="/" element={<Login/>} />
			<Route path="/register" element={<Register/>} />
			<Route path="/atendente" element={<Atendente/>} />
			<Route path="*" element={<NotFound/>} />	
			<Route path="/admin" element={<Admin/>} />		
			<Route path="/ordered" element={<Ordered/>} />		
			<Route path="/novopedido" element={<NovoPedido/>} />
		
		</Routes>	
	</BrowserRouter>
  )
}

export default Router




