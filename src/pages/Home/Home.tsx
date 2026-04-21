import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import developer from '../../assets/developer.png';
import boy from '../../assets/boy.png';
import resume from '../../assets/resume.pdf';
import * as S from './styles';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <S.Container>
      <S.Hero>
        <S.HeroText>
          <S.Greeting>Hello, welcome to my portfolio 👋</S.Greeting>
          <S.Name>Daniel Groh</S.Name>
          <S.TypeWrapper>
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
          </S.TypeWrapper>
          <S.CTARow>
            <S.CTAPrimary onClick={() => navigate('/projects')}>
              View Projects
            </S.CTAPrimary>
            <S.CTASecondary href={resume} target="_blank" rel="noreferrer">
              Download CV
            </S.CTASecondary>
          </S.CTARow>
        </S.HeroText>
        <S.HeroImage>
          <img src={developer} alt="" />
        </S.HeroImage>
      </S.Hero>

      <S.BioSection>
        <S.BioText>
          I am a <strong>software developer</strong> with a passion for creating
          innovative and efficient solutions. In 2014 I started my journey
          through the tech world and fell in love at first glance. I have worked
          on a variety of projects, from building webpages to{' '}
          <strong>complex backend systems</strong>.
          <br />
          <br />I love exploring new technologies and methodologies to enhance
          my skills and deliver <strong>high-quality products</strong>.
        </S.BioText>
        <img src={boy} alt="" />
      </S.BioSection>
    </S.Container>
  );
}

export default Home;
