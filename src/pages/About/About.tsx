import { IoLogoJavascript, IoLogoGithub, IoLogoNodejs } from 'react-icons/io';
import {
  SiAmazonaws,
  SiFigma,
  SiPostman,
  SiReact,
  SiTypescript,
  SiJenkins,
  SiMongodb,
  SiApachejmeter,
  SiPwa,
  SiGnubash,
  SiPython,
  SiVite,
} from 'react-icons/si';
import { useEffect } from 'react';
import perfilPic from '../../assets/perfilPic.png';
import * as S from './styles';
import { IIcon } from './interfaces';

function About() {
  const skills: IIcon[] = [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: <IoLogoJavascript size={52} />,
    },
    { id: 'typescript', name: 'TypeScript', icon: <SiTypescript size={52} /> },
    { id: 'node', name: 'Node.js', icon: <IoLogoNodejs size={52} /> },
    { id: 'react', name: 'React.js', icon: <SiReact size={52} /> },
    { id: 'vite', name: 'Vite', icon: <SiVite size={52} /> },
    { id: 'pwa', name: 'PWA', icon: <SiPwa size={52} /> },
    { id: 'bash', name: 'Bash', icon: <SiGnubash size={52} /> },
    { id: 'python', name: 'Python', icon: <SiPython size={52} /> },
  ];

  const tools: IIcon[] = [
    { id: 'aws', name: 'AWS', icon: <SiAmazonaws size={52} /> },
    { id: 'git', name: 'Git', icon: <IoLogoGithub size={52} /> },
    { id: 'mongodb', name: 'MongoDB', icon: <SiMongodb size={52} /> },
    { id: 'jenkins', name: 'Jenkins', icon: <SiJenkins size={52} /> },
    { id: 'figma', name: 'Figma', icon: <SiFigma size={52} /> },
    { id: 'postman', name: 'Postman', icon: <SiPostman size={52} /> },
    { id: 'jmeter', name: 'JMeter', icon: <SiApachejmeter size={52} /> },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <S.Container>
      <S.ProfileSection>
        <S.ProfileContent>
          <S.SectionLabel>About me</S.SectionLabel>
          <S.SectionTitle>Who am I</S.SectionTitle>
          <S.Bio>
            I am <strong>Daniel Arruda Groh</strong> from Taubaté, SP — Brazil.
            I have a degree in <strong>computer engineering</strong> and have
            been working as a software engineer since 2021. Throughout my career
            I have had the opportunity to collaborate with multidisciplinary
            teams, taking on roles as software architect, SRE, front-end
            developer, back-end developer, quality assurance engineer, and
            product owner.
            <br />
            <br />
            Apart from coding, I love to cook, exercise and spend some time at
            the beach!
          </S.Bio>
        </S.ProfileContent>
        <S.ProfilePhotoWrapper>
          <img src={perfilPic} alt="Daniel Groh" />
        </S.ProfilePhotoWrapper>
      </S.ProfileSection>

      <S.Divider />

      <S.GridTitle>
        My <span>skills</span>
      </S.GridTitle>
      <S.Icon>
        {skills.map((skill) => (
          <S.IconBox key={skill.id}>
            {skill.icon}
            <span>{skill.name}</span>
          </S.IconBox>
        ))}
      </S.Icon>

      <S.GridTitle>
        <span>Tools</span> I use
      </S.GridTitle>
      <S.Icon>
        {tools.map((tool) => (
          <S.IconBox key={tool.id}>
            {tool.icon}
            <span>{tool.name}</span>
          </S.IconBox>
        ))}
      </S.Icon>
    </S.Container>
  );
}

export default About;
