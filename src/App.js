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
import Skills from './components/Skills';
import Video from './components/Videography';
import Photo from './components/Photography';
import Blog from './components/Blogs';
import Article from './components/Blogs/Article';
import Services from './components/Skills/Services';

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
          <Route path="/skills" element={<Skills />} />
          <Route path="/video" element={<Video />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog/:id" element={<Article />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
