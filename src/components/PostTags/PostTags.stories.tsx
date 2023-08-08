import { Meta, StoryFn } from '@storybook/react/';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock.posts.data[0].attributes.tags,
} as Meta<PostTagsProps>;

export const Template: StoryFn<PostTagsProps> = (args) => {
  return (
    <div>
      <PostTags {...args} />
    </div>
  );
};
