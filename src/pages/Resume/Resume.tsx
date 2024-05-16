import profilePic from '../../assets/perfilPic.jpg';
import * as S from './styles';

function Resume() {
  const onEnglishResumeDownload = () => {
    const pdfUrl = 'resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const onPortugueseResumeDownload = () => {
    const pdfUrl = 'curriculo.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <S.Container>
      <S.DownloadResume onClick={onEnglishResumeDownload}>
        Download Resume - English
      </S.DownloadResume>
      <S.DownloadResume onClick={onPortugueseResumeDownload}>
        Download Resume - Portuguese
      </S.DownloadResume>
      <S.ProfileImage>
        <img src={profilePic} alt="ProfilePhoto" />
      </S.ProfileImage>
    </S.Container>
  );
}

export default Resume;
