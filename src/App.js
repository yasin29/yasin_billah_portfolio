import './App.scss';
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Academic from './components/Academic';
import Play from './components/Game';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/play" element={<Play />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
