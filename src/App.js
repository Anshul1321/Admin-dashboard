import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layout';
import Dashboard from './components/dashboard';
import Assets from './components/assets';
import Analysis from './components/Analysis';
import Jobs from './components/jobs';
import Reports from './components/reports';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/assets' element={<Assets />} />
          <Route path='/analysis' element={<Analysis />} />
          <Route path='/jobs' element={<Jobs />} /> 
          <Route path='/reports' element={<Reports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
