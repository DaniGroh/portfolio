import { IoLogoGithub } from 'react-icons/io';
import { useEffect } from 'react';
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
      title: 'Pomodoro Timer',
      description:
        'Focus timer built with the Pomodoro technique. Set your focus intervals, get notified when time is up, and track your productivity sessions.',
      image: Pomodoro,
      link: 'https://github.com/danigroh/pomodoro',
      tags: ['React', 'TypeScript', 'CSS'],
    },
    {
      id: '2',
      title: 'Social Network',
      description:
        'Social media app where users can create and edit profiles, write posts, see a feed, leave comments, and like content.',
      image: SocialNetwork,
      link: 'https://github.com/DaniGroh/social-media',
      tags: ['React', 'Vite', 'TypeScript'],
    },
    {
      id: '3',
      title: 'Financial Control',
      description:
        'Personal finance tracker to register transactions, search past entries, and visualize a summary of your financial health.',
      image: FinancialControl,
      link: 'https://github.com/DaniGroh/financial-control',
      tags: ['React', 'TypeScript', 'Node.js'],
    },
    {
      id: '4',
      title: 'Portfolio',
      description:
        'This portfolio site — built with React and styled-components to showcase my projects, skills, and career history.',
      image: Portifolio,
      link: 'https://github.com/danigroh/portfolio',
      tags: ['React', 'TypeScript', 'styled-components'],
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <S.Container>
      <S.PageHeader>
        <S.PageLabel>Portfolio</S.PageLabel>
        <S.Title>My Recent Work</S.Title>
        <S.TitleDesc>A selection of projects I&apos;ve built</S.TitleDesc>
      </S.PageHeader>
      <S.Projects>
        {projects.map((project) => (
          <S.ProjectBox key={project.id}>
            <S.ProjectImage src={project.image} alt={project.title} />
            <S.ProjectBody>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>
              {project.tags && (
                <S.TagRow>
                  {project.tags.map((tag) => (
                    <S.Tag key={tag}>{tag}</S.Tag>
                  ))}
                </S.TagRow>
              )}
              <S.Github href={project.link} target="_blank" rel="noreferrer">
                <IoLogoGithub size={16} />
                View on GitHub
              </S.Github>
            </S.ProjectBody>
          </S.ProjectBox>
        ))}
      </S.Projects>
    </S.Container>
  );
}

export default Projects;
