import * as S from './styles';
import { AboutMe } from './AboutMe';
import { Knowledge } from './Knowledge';
import { Projects } from './Projects';

function Portfolio() {
  return (
    <S.Container>
      <AboutMe />
      <Knowledge />
      <Projects />
    </S.Container>
  );
}

export default Portfolio;
