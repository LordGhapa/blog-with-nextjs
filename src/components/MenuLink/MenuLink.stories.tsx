import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Menu Link',
    link: 'https://www.google.com',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    background: {
      default: 'dark',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '320px' }}>
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
