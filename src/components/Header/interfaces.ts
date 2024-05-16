import { ReactElement } from 'react';

export type IHeaderProps = {
  changePage(page: string): void;
};

export type IPage = {
  id: string;
  title: string;
  link: string;
  icon: ReactElement;
};
