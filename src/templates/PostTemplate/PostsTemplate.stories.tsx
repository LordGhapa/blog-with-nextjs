import { Meta, StoryFn } from '@storybook/react/';
import { PostTemplate, PostTemplateProps } from '.';
import { mock } from './mock';

export default {
	title: 'PostTemplate',
	component: PostTemplate,
	args: mock,
} as Meta;

export const Template: StoryFn<PostTemplateProps> = (args) => {
	return (
		<div>
			<PostTemplate {...args} />
		</div>
	);
};
export const noPosts: StoryFn<PostTemplateProps> = (args) => {
	return (
		<div>
			<PostTemplate {...args} posts={undefined} />
		</div>
	);
};
