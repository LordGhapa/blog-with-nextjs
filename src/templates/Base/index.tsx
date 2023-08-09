import { Footer } from '../../components/Footer';
import { Header } from '../../components/Hearder';
import { Menu } from '../../components/Menu';
import { Settings } from '../../shared-types/Settings';
import * as Styled from './styles';

export type BaseProps = {
  settings: Settings;
  children: React.ReactNode;
};

export const Base = ({ settings, children }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        menuLink={settings.setting.data.attributes.menuLink}
        blogName={settings.setting.data.attributes.blogName}
        logo={settings.setting.data.attributes.logo}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={settings.setting.data.attributes.blogName}
          blogDescription={settings.setting.data.attributes.blogDescription}
          logoUrl={settings.setting.data.attributes.logo.data.attributes.url}
          showText={true}
        />
      </Styled.HeaderContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer
          footerHtml={settings.setting.data.attributes.footerText}
        ></Footer>
      </Styled.FooterContainer>
    </Styled.Wrapper>
  );
};
