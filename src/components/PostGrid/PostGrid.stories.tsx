import { Meta, StoryFn } from '@storybook/react/';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

export default {
	title: 'PostGrid',
	component: PostGrid,
	args: mock,
} as Meta<PostGridProps>;

export const Template: StoryFn<PostGridProps> = (args) => {
	return (
		<div>
			<PostGrid {...args} />
		</div>
	);
};
