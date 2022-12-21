
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndexRoutes from './components/IndexRoutes/IndexRoutes';
import NavBar from './components/navbar';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <IndexRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
