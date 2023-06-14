import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import * as S from './styles';

export function Footer() {
  const [help, setHelp] = useState(false);

  return (
    <S.Container>
      {!help && (
        <S.HelpIcon
          onClick={() => {
            setHelp(true);
          }}
        >
          Contact Me
        </S.HelpIcon>
      )}
      {help && (
        <S.HelpList>
          <button type="button">LinkedIn</button>
          <button type="button">GitHub</button>
          <button type="button">Whatsapp</button>
          <button
            type="button"
            onClick={() => {
              setHelp(false);
            }}
          >
            <MdClose />
          </button>
        </S.HelpList>
      )}
      <S.Footer>
        Daniel Arruda Groh
        <br />
        AWS | Javascript | Typescript | React
        <br />
        Taubaté, São Paulo - Brazil
      </S.Footer>
    </S.Container>
  );
}
