import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    title: 'Default',
  },
  argTypes: {
    title: { type: 'string' },
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
  title: 'texto esta claro',
  colorDark: false,
};
Light.args = {
  title: 'texto esta escuro',
  colorDark: true,
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
