import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';
import profilePic from '../../assets/perfilPic.jpg';
import * as S from './styles';

function AboutMe() {
  return (
    <S.Container>
      <S.Intro>
        <S.Greeting>
          <span>
            Hello,
            <br />
            I&apos;m Daniel Arruda Groh
            <br />A software engineer
          </span>
          <S.SocialMedia>
            <a
              href="https://github.com/DaniGroh"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniagroh/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin size={25} />
            </a>
            <a
              href="https://wa.me/qr/CFPWWO6FLH5OG1"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp size={25} />
            </a>
          </S.SocialMedia>
        </S.Greeting>
        <S.ProfileImage>
          <img src={profilePic} alt="ProfilePhoto" />
        </S.ProfileImage>
      </S.Intro>
      <S.Info>
        I have a degree in computer engineering and during my degree I have
        worked with different tools. I&apos;m currently a front-end developer at{' '}
        <a href="https://www.receba.app" target="_blank" rel="noreferrer">
          Receba
        </a>
        , but have already worked as back-end developer at{' '}
        <a href="https://www.iclubs.tech" target="_blank" rel="noreferrer">
          Iclubs
        </a>{' '}
        and as software tester at{' '}
        <a href="https://www.zappts.com.br" target="_blank" rel="noreferrer">
          Zappts
        </a>
        .
      </S.Info>
    </S.Container>
  );
}

export default AboutMe;
