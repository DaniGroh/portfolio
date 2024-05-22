import { IoLogoGithub } from 'react-icons/io';
import { IProject } from './interfaces';
import * as S from './styles';

function Projects() {
  const projects: IProject[] = [
    {
      id: '1',
      title: 'Pomodoro',
      description: 'I made a pomodoro website',
      image:
        'https://cdn.discordapp.com/attachments/846865631159517206/1242624072614154291/image.png?ex=664e8359&is=664d31d9&hm=ab220420b11b924e751db5970ad7abea93ddc35a57a8ea34ae9dbd5392ecee2b&',
      link: 'https://github.com/danigroh/pomodoro',
    },
    {
      id: '2',
      title: 'Social Network',
      description: 'I made a social network website',
      image:
        'https://cdn.discordapp.com/attachments/846865631159517206/1242622704364945449/image.png?ex=664e8213&is=664d3093&hm=18b3d38d5c79056634b48117025d6f5ca99fdde806925d61b619dff865591fbc&',
      link: 'https://github.com/DaniGroh/social-media',
    },
    {
      id: '3',
      title: 'Financial Control',
      description: 'I made a financial control website',
      image:
        'https://cdn.discordapp.com/attachments/846865631159517206/1242624442958614528/image.png?ex=664e83b2&is=664d3232&hm=b9eb7e2b3ce5468bf10c116e56f39c5c2520c0d74fed6ed9c9c2da68a11d4197&',
      link: 'https://github.com/DaniGroh/financial-control',
    },
    {
      id: '4',
      title: 'Portifolio',
      description: 'I made a portifolio website',
      image:
        'https://cdn.discordapp.com/attachments/846865631159517206/1242623449898291210/image.png?ex=664e82c5&is=664d3145&hm=c426657bdfc065afbca0e4d1fbe3da9b97bcbfe1c9b1977296adcb7efeb2cfec&',
      link: 'https://github.com/danigroh/portfolio',
    },
  ];

  return (
    <S.Container>
      <S.Title>
        <span>My recent Works</span>
        Here are some projects I&apos;ve worked on recently
      </S.Title>
      <S.Projects>
        {projects.map((project) => (
          <S.ProjectBox key={project.id}>
            <img src={project.image} alt="" />
            {project.title} <br />
            {project.description}
            <S.Github href={project.link} target="_blank" rel="noreferrer">
              <IoLogoGithub size={25} />
              Github
            </S.Github>
          </S.ProjectBox>
        ))}
      </S.Projects>
    </S.Container>
  );
}

export default Projects;
