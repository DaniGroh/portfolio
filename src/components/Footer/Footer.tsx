import { IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import * as S from './styles';

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <S.Container>
      <S.Footer>
        <S.Author>Developed and design by Daniel Groh</S.Author>
        <S.Copyright>Copyright © {year}</S.Copyright>
        <S.SocialMedia>
          <a href="mailto:daniagroh@gmail.com" target="_blank" rel="noreferrer">
            <IoMdMail size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniagroh/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin size={25} />
          </a>
          <a
            href="https://github.com/DaniGroh"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={25} />
          </a>
        </S.SocialMedia>
      </S.Footer>
    </S.Container>
  );
}
