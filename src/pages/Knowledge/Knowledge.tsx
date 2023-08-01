import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import {
  SiAmazonaws,
  SiFigma,
  SiPostman,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import * as S from './styles';

function Knowledge() {
  return (
    <S.Container>
      <span>My skills</span>
      <S.Skills>
        <S.SkillBox>
          <IoLogoHtml5 size={40} />
          <span>HTML 5</span>
        </S.SkillBox>
        <S.SkillBox>
          <IoLogoCss3 size={40} />
          <span>CSS 3</span>
        </S.SkillBox>
        <S.SkillBox>
          <SiReact size={40} />
          <span>React.js</span>
        </S.SkillBox>
        <S.SkillBox>
          <IoLogoJavascript size={40} />
          <span>Javascript</span>
        </S.SkillBox>
        <S.SkillBox>
          <SiTypescript size={40} />
          <span>Typescript</span>
        </S.SkillBox>
        <S.SkillBox>
          <SiPostman size={40} />
          <span>Postman</span>
        </S.SkillBox>
        <S.SkillBox>
          <SiFigma size={40} />
          <span>Figma</span>
        </S.SkillBox>
        <S.SkillBox>
          <SiAmazonaws size={40} />
          <span>AWS</span>
        </S.SkillBox>
      </S.Skills>
    </S.Container>
  );
}

export default Knowledge;
