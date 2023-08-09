import { Meta, StoryFn } from '@storybook/react/';
import { PostTemplate, PostTemplateProps } from '.';

export default {
  title: 'PostTemplate',
  component: PostTemplate,
} as Meta<PostTemplateProps>;

export const Template: StoryFn<PostTemplateProps> = (args) => {
  return (
    <div>
      <PostTemplate {...args} />
    </div>
  );
};
