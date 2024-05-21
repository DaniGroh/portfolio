import developer from '../../assets/developer.png';
import * as S from './styles';

function AboutMe() {
  return (
    <S.Container>
      <S.Intro>
        <S.Greeting>
          <span>
            Hello, 👋🏻
            <br />
            I&apos;m Daniel Arruda Groh
            <br />A software engineer
          </span>
        </S.Greeting>
        <S.ProfileImage>
          <img src={developer} alt="ProfilePhoto" />
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
