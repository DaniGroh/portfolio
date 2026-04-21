import { IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import * as S from './styles';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <S.Footer>
      <S.FooterText>© {year} Daniel Groh. All rights reserved.</S.FooterText>
      <S.SocialMedia>
        <a
          href="mailto:daniagroh@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <IoMdMail size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/daniagroh/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <IoLogoLinkedin size={22} />
        </a>
        <a
          href="https://github.com/DaniGroh"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <IoLogoGithub size={22} />
        </a>
      </S.SocialMedia>
    </S.Footer>
  );
}
