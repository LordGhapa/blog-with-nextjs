import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/tela.png',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args: LogoLinkProps) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
TextOnly.args = {
  srcImg: '',
};
