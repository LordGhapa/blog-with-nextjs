import { Cover } from '../../shared-types/Cover';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
	title: string;
	slug: string;
	allowComments: boolean;
	cover: Cover;
} & ArticleMetaProps;

export const ArticleHeader = ({
	title,
	cover,
	author,
	category,
	createdAt,
}: ArticleHeaderProps) => {
	return (
		<Styled.Wrapper>
			<Heading as="h2" size="huge">
				{title}
			</Heading>

			<Styled.Cover src={cover.data.attributes.url} alt={title} />
			<ArticleMeta author={author} createdAt={createdAt} category={category} />
		</Styled.Wrapper>
	);
};
