import { IoLogoGithub } from 'react-icons/io';
import { IProject } from './interfaces';
import Pomodoro from '../../assets/pomodoro.png';
import SocialNetwork from '../../assets/social_network.png';
import Portifolio from '../../assets/portfolio.png';
import FinancialControl from '../../assets/financial_control.png';
import * as S from './styles';

function Projects() {
  const projects: IProject[] = [
    {
      id: '1',
      title: 'Pomodoro',
      description:
        'This is a website to help you to focus using Pomodoro techinic, where you set the amount of time you should focus on your activities, and an alarm will ring in the end of the focusing time you set.',
      image: Pomodoro,
      link: 'https://github.com/danigroh/pomodoro',
    },
    {
      id: '2',
      title: 'Social Network',
      description:
        'Project of a social network made with Reactjs and Vite, where is possible to edit your profile, create new posts, see older posts, comment and like them.',
      image: SocialNetwork,
      link: 'https://github.com/DaniGroh/social-media',
    },
    {
      id: '3',
      title: 'Financial Control',
      description:
        'Project of a website to control financial, where is possible to insert new transactions, search for transaction made in the past and the also show a summary of financial health.',
      image: FinancialControl,
      link: 'https://github.com/DaniGroh/financial-control',
    },
    {
      id: '4',
      title: 'Portfolio',
      description:
        'My portfolio made with Reactjs, in this website is possible to get to know more informations about my previous work and my skills. Also is possible to download my resume.',
      image: Portifolio,
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
            <img src={project.image} alt="project" />
            <span>{project.title}</span> <br />
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
