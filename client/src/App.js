import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CattlePage from './pages/CattlePage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CattlePage />} />
      </Routes>
    </>
  );
}

export default App;
