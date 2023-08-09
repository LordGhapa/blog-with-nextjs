import { Meta, StoryFn } from '@storybook/react/';
import { PostsTemplate, PostsTemplateProps } from '.';
import { mock } from './mock';
export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: StoryFn<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
export const NoPosts: StoryFn<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} posts={undefined} />
    </div>
  );
};
