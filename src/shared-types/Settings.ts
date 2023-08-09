import { MenuLink } from '../components/Menu';
import { Cover } from './Cover';

export type Settings = {
  setting: {
    data: {
      id: string;
      attributes: {
        blogName: string;
        blogDescription: string;
        logo: Cover;
        menuLink: MenuLink[];
        footerText: string;
      };
    };
  };
};
