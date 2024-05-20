import { Routes, Route } from 'react-router-dom';
import { AppContainer } from '../containers';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Resume } from '../pages/Resume';

function AppRoutes() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AppContainer>
  );
}

export default AppRoutes;
