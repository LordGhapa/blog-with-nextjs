import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'default',
  },
  argTypes: {
    colorDark: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;
Dark.args = {
  colorDark: false,
};
Light.args = {
  colorDark: true,
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
