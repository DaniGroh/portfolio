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
} from 'react-icons/si';
import perfilPic from '../../assets/perfilPic.png';
import * as S from './styles';
import { IIcon } from './interfaces';

function About() {
  const skills: IIcon[] = [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: <IoLogoJavascript size={80} />,
    },
    {
      id: 'typescript',
      name: 'Typescript',
      icon: <SiTypescript size={80} />,
    },
    {
      id: 'node',
      name: 'Node.js',
      icon: <IoLogoNodejs size={80} />,
    },
    {
      id: 'react',
      name: 'React.js',
      icon: <SiReact size={80} />,
    },
    {
      id: 'pwa',
      name: 'PWA',
      icon: <SiPwa size={80} />,
    },
    {
      id: 'bash',
      name: 'Bash',
      icon: <SiGnubash size={80} />,
    },
    {
      id: 'python',
      name: 'Python',
      icon: <SiPython size={80} />,
    },
  ];

  const tools: IIcon[] = [
    {
      id: 'aws',
      name: 'AWS',
      icon: <SiAmazonaws size={80} />,
    },
    {
      id: 'git',
      name: 'Git',
      icon: <IoLogoGithub size={80} />,
    },
    {
      id: 'mongodb',
      name: 'MongoDb',
      icon: <SiMongodb size={80} />,
    },
    {
      id: 'jenkins',
      name: 'Jenkins',
      icon: <SiJenkins size={80} />,
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: <SiFigma size={80} />,
    },
    {
      id: 'postman',
      name: 'Postman',
      icon: <SiPostman size={80} />,
    },
    {
      id: 'jmeter',
      name: 'JMeter',
      icon: <SiApachejmeter size={80} />,
    },
  ];

  return (
    <S.Container>
      <S.Description>
        <S.DescriptionTitle>
          <span>Who am I</span> <br />
          I am Daniel Arruda Groh from Taubaté - SP, Brazil. <br />I have a
          degree in computer engineering, and I&apos;m working as a software
          engenier since 2021. <br /> Throughout my career, I have had the
          opportunity to collaborate with multidisciplinary teams, I already
          worked as software architect and SRE, front-end developer, back-end
          developer, software quality assurance and also as product owner.
          <br /> <br /> Apart from coding, I love to cook, exercise and spend
          some time at the beach!
        </S.DescriptionTitle>
        <img src={perfilPic} alt="" />
      </S.Description>
      <S.SkillTitle>
        My&nbsp;<span>skills</span>
      </S.SkillTitle>
      <S.Icon>
        {skills.map((skill) => (
          <S.IconBox key={skill.id}>
            {skill.icon}
            <span>{skill.name}</span>
          </S.IconBox>
        ))}
      </S.Icon>
      <S.SkillTitle>
        <span>Tools</span>&nbsp;I use
      </S.SkillTitle>
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
