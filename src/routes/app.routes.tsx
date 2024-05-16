import { Routes, Route } from 'react-router-dom';
import { AppContainer } from '../containers';
import { AboutMe } from '../pages/AboutMe';
import { Knowledge } from '../pages/Knowledge';
import { Projects } from '../pages/Projects';
import { Resume } from '../pages/Resume';

function AppRoutes() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about" element={<Knowledge />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </AppContainer>
  );
}

export default AppRoutes;
