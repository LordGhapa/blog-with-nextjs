import * as Styled from './styles';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({ text, srcImg, link, newTab }: LogoLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Heading size="small" uppercase>
      <Styled.Container target={target} href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};
