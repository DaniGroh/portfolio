import { useState } from 'react';
import resume from '../../assets/resume.pdf';
import curriculo from '../../assets/curriculo.pdf';
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
            data={resume}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Unable to load English Resume,{' '}
              <a href={resume} target="_blank" rel="noreferrer">
                click here to download it.
              </a>
            </p>
          </object>
        )}
        {portugueseResume && (
          <object
            data={curriculo}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Unable to load Portuguese Resume,{' '}
              <a href={curriculo} target="_blank" rel="noreferrer">
                click here to download it.
              </a>
            </p>
          </object>
        )}
      </S.Resume>
    </S.Container>
  );
}

export default Resume;
