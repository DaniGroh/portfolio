import developer from '../../assets/developer.png';
import boy from '../../assets/boy.png';
import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <S.Intro>
        <span>
          Hello, 👋🏻
          <br />
          I&apos;m Daniel Arruda Groh
          <br />
          Software engineer
        </span>
        <img src={developer} alt="Developer" />
      </S.Intro>
      <S.Info>
        <span>
          I have a degree in computer engineering and during my degree I have
          worked with different tools. I&apos;m currently a front-end developer
          at{' '}
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
        </span>

        <img src={boy} alt="Boy" />
      </S.Info>
    </S.Container>
  );
}

export default Home;
