import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import developer from '../../assets/developer.png';
import boy from '../../assets/boy.png';
import * as S from './styles';

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <S.Container>
      <S.Intro>
        <S.Greeting>
          Hello, 👋🏻
          <br />
          I&apos;m <span>DANIEL GROH</span>
          <br />
          <S.Type>
            <Typewriter
              options={{
                strings: [
                  'Software Developer',
                  'Quality Assurance',
                  'Full Stack Developer',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </S.Type>
        </S.Greeting>
        <img src={developer} alt="" />
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
