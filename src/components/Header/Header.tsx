import { useCallback, useState, useMemo } from 'react';
import { VscHome, VscAccount, VscCode, VscFile } from 'react-icons/vsc';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import logo from '../../assets/logo.png';
import { IHeaderProps, IPage } from './interfaces';
import * as S from './styles';

export function Header({ changePage }: IHeaderProps) {
  const [expanded, setExpanded] = useState(false);
  // eslint-disable-next-line no-restricted-globals
  const mobile = screen.width < 767;
  const showIcons = useMemo(
    () => !mobile || (mobile && expanded),
    [mobile, expanded]
  );

  const pages: IPage[] = [
    {
      id: 'home',
      title: 'Home',
      link: '/',
      icon: <VscHome />,
    },
    {
      id: 'about',
      title: 'About',
      link: '/about',
      icon: <VscAccount />,
    },
    {
      id: 'projects',
      title: 'Projects',
      link: '/projects',
      icon: <VscCode />,
    },
    {
      id: 'resume',
      title: 'Resume',
      link: '/resume',
      icon: <VscFile />,
    },
  ];

  const handleSelectPage = useCallback(
    (pageLink: string) => {
      const pageArray = pages.find((page) => page.link === pageLink);
      if (pageArray) {
        setExpanded(false);
        changePage(pageArray.link);
      }
    },
    [pages]
  );

  const handleLogoClick = useCallback(() => {
    changePage(pages[0].link);
  }, [pages]);

  return (
    <S.Header>
      <S.Top>
        <S.Logo src={logo} onClick={() => handleLogoClick()} alt="" />
        {mobile && !expanded && (
          <S.Expand onClick={() => setExpanded(true)}>
            <IoIosMenu />
          </S.Expand>
        )}
        {mobile && expanded && (
          <S.Expand onClick={() => setExpanded(false)}>
            <IoMdClose />
          </S.Expand>
        )}
      </S.Top>
      {showIcons && (
        <S.Itens>
          {pages.map((page) => (
            <S.NavItem
              type="button"
              key={page.link}
              onClick={() => handleSelectPage(page.link)}
            >
              {page.icon}
              {page.title}
            </S.NavItem>
          ))}
        </S.Itens>
      )}
    </S.Header>
  );
}
