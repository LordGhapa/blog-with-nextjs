import { Meta, StoryFn } from '@storybook/react/';
import { Menu, MenuProps } from '.';
import mock from './mock';

export default {
  title: 'Menu versão 2',
  component: Menu,
  args: mock,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta<MenuProps>;

export const Template: StoryFn<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
