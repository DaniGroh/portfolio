import { useCallback } from 'react';
import { VscHome, VscAccount, VscCode, VscFile } from 'react-icons/vsc';
import { IHeaderProps, IPage } from './interfaces';
import * as S from './styles';

export function Header({ changePage }: IHeaderProps) {
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
        changePage(pageArray.link);
      }
    },
    [pages]
  );

  return (
    <S.Header>
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
    </S.Header>
  );
}
