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
        'https://cdn.discordapp.com/attachments/1242168951828381760/1242168989120200724/image.png?ex=664cdb85&is=664b8a05&hm=3807c3dfb4c84ad2a914b5a42452e39819d33de23037304e550a3bf271c186fc&',
      link: 'htps://github.com/danigroh/pomodoro',
    },
    {
      id: '2',
      title: 'Barbershop',
      description: 'I made a barbershop website',
      image:
        'https://cdn.discordapp.com/attachments/1242168951828381760/1242168989120200724/image.png?ex=664cdb85&is=664b8a05&hm=3807c3dfb4c84ad2a914b5a42452e39819d33de23037304e550a3bf271c186fc&',
      link: 'htps://github.com/danigroh/pomodoro',
    },
    {
      id: '3',
      title: 'Financial Control',
      description: 'I made a financial control website',
      image:
        'https://cdn.discordapp.com/attachments/1242168951828381760/1242168989120200724/image.png?ex=664cdb85&is=664b8a05&hm=3807c3dfb4c84ad2a914b5a42452e39819d33de23037304e550a3bf271c186fc&',
      link: 'htps://github.com/danigroh/pomodoro',
    },
    {
      id: '4',
      title: 'Portifolio',
      description: 'I made a portifolio website',
      image:
        'https://cdn.discordapp.com/attachments/1242168951828381760/1242168989120200724/image.png?ex=664cdb85&is=664b8a05&hm=3807c3dfb4c84ad2a914b5a42452e39819d33de23037304e550a3bf271c186fc&',
      link: 'htps://github.com/danigroh/pomodoro',
    },
    {
      id: '5',
      title: 'E-commerce',
      description: 'I made a e-commerce',
      image:
        'https://cdn.discordapp.com/attachments/1242168951828381760/1242168989120200724/image.png?ex=664cdb85&is=664b8a05&hm=3807c3dfb4c84ad2a914b5a42452e39819d33de23037304e550a3bf271c186fc&',
      link: 'htps://github.com/danigroh/pomodoro',
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
