import { Meta, StoryFn } from '@storybook/react/';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

export default {
	title: 'ArticleHeader',
	component: ArticleHeader,
	args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: StoryFn<ArticleHeaderProps> = (args) => {
	return (
		<div>
			<ArticleHeader {...args} />
		</div>
	);
};
