import { Meta, StoryFn } from '@storybook/react/';
import { ToggleTheme } from '.';

export default {
  title: 'ToggleTheme',
  component: ToggleTheme,
} as Meta;

export const Template: StoryFn = (args) => {
  return (
    <div>
      <ToggleTheme {...args} />
    </div>
  );
};
