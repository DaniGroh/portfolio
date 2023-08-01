import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { IoMdMail, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';
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
          <a href="mailto:daniagroh@gmail.com" target="_blank" rel="noreferrer">
            E-mail&ensp;
            <IoMdMail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniagroh/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn&ensp;
            <IoLogoLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/qr/CFPWWO6FLH5OG1"
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp&ensp;
            <IoLogoWhatsapp size={20} />
          </a>
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
        AWS | Javascript | TypeScript | React
        <br />
        Taubaté, São Paulo - Brazil
      </S.Footer>
    </S.Container>
  );
}
