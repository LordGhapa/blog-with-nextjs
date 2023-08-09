import { Footer } from '../../components/Footer';
import { Header } from '../../components/Hearder';
import { Menu } from '../../components/Menu';
import { Setting } from '../../shared-types/Setting';
import * as Styled from './styles';

export type BaseProps = {
  setting: Setting;
  children: React.ReactNode;
};

export const Base = ({ setting, children }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        menuLink={setting.data.attributes.menuLink}
        blogName={setting.data.attributes.blogName}
        logo={setting.data.attributes.logo}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={setting.data.attributes.blogName}
          blogDescription={setting.data.attributes.blogDescription}
          logoUrl={setting.data.attributes.logo.data.attributes.url}
          showText={true}
        />
      </Styled.HeaderContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.data.attributes.footerText}></Footer>
      </Styled.FooterContainer>
    </Styled.Wrapper>
  );
};
