import { useState } from 'react';
import * as S from './styles';

function Resume() {
  const [portugueseResume, setPortugueseResume] = useState(false);

  return (
    <S.Container>
      <S.DownloadResume>
        <button type="button" onClick={() => setPortugueseResume(false)}>
          English
        </button>
        <button type="button" onClick={() => setPortugueseResume(true)}>
          Portuguese
        </button>
      </S.DownloadResume>
      <S.Resume>
        {!portugueseResume && (
          <object
            data="resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Unable to load Resume, contact me at{' '}
              <a
                href="https://www.linkedin.com/in/daniagroh/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </p>
          </object>
        )}
        {portugueseResume && (
          <object
            data="curriculo.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Unable to load Resume, contact me at{' '}
              <a
                href="https://www.linkedin.com/in/daniagroh/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </p>
          </object>
        )}
      </S.Resume>
    </S.Container>
  );
}

export default Resume;
