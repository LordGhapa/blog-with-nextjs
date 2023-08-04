import { Header } from '.';
import mock from './mock';
export default {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  args: mock,

  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Header {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
