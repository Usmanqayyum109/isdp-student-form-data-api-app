
import './App.css';
import Create from './Componets/Create';
import Read from './Componets/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Create />} />
     <Route path='Read' element={<Read />} />
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
