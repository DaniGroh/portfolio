import { useCallback } from 'react';
import { IHeaderProps, IPage } from './interfaces';
import * as S from './styles';

export function Header({ changePage }: IHeaderProps) {
  const pages: IPage[] = [
    {
      id: 'home',
      title: 'Home',
      link: '/',
    },
    {
      id: 'projects',
      title: 'Projects',
      link: '/projects',
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
    <S.Container>
      <S.Header>
        {pages.map((page) => (
          <S.NavItem
            type="button"
            key={page.link}
            onClick={() => handleSelectPage(page.link)}
          >
            {page.title}
          </S.NavItem>
        ))}
      </S.Header>
    </S.Container>
  );
}
