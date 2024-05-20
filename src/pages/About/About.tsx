import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import {
  SiAmazonaws,
  SiFigma,
  SiPostman,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import perfilPic from '../../assets/perfilPic.png';
import * as S from './styles';
import { IIcon } from './interfaces';

function About() {
  const skills: IIcon[] = [
    {
      id: 'html',
      name: 'HTML 5',
      icon: <IoLogoHtml5 size={80} />,
    },
    {
      id: 'css',
      name: 'CSS 3',
      icon: <IoLogoCss3 size={80} />,
    },
    {
      id: 'react',
      name: 'React.js',
      icon: <SiReact size={80} />,
    },
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
      id: 'aws',
      name: 'AWS',
      icon: <SiAmazonaws size={80} />,
    },
  ];

  const tools: IIcon[] = [
    {
      id: 'postman',
      name: 'Postman',
      icon: <SiPostman size={80} />,
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: <SiFigma size={80} />,
    },
  ];

  return (
    <S.Container>
      <S.Description>
        <S.DescriptionTitle>
          <span>Who am I</span> <br />
          I am Daniel Arruda Groh from Taubaté - SP, Brazil. <br />
          I&apos;m
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
