import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
