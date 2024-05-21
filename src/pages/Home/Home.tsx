import Typewriter from 'typewriter-effect';
import developer from '../../assets/developer.png';
import boy from '../../assets/boy.png';
import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <S.Intro>
        <S.Greeting>
          Hello, 👋🏻
          <br />
          I&apos;m <span>DANIEL GROH</span>
          <br />
          <Typewriter
            options={{
              strings: [
                'Software Developer',
                'Back-end Developer',
                'Quality Assurance',
                'Front-end Developer',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </S.Greeting>
        <img src={developer} alt="Developer" />
      </S.Intro>
      <S.Info>
        <span>
          I am a software developer with a passion for creating innovative and
          efficient solutions.
          <br /> At 2014 I started mt journey through the tec world and felt in
          love at glance. I have worked on a variety of projects, from building
          webpages to complex backend systems.
          <br />I love exploring new technologies and methodologies to enhance
          my skills and deliver high-quality products.
        </span>

        <img src={boy} alt="Boy" />
      </S.Info>
    </S.Container>
  );
}

export default Home;
