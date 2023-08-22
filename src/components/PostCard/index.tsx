import Link from 'next/link';

import * as Styled from './styles';
import { Heading } from '../Heading';
import { Cover } from '../../shared-types/Cover';

export type PostCardProps = {
	slug: string;
	resumo: string;
	title: string;
	cover: Cover;
};

export const PostCard = ({ title, cover, resumo, slug }: PostCardProps) => {
	return (
		<Styled.Wrapper>
			<Link href={`/post/${slug}`}>
				<Styled.Cover
					src={
						cover?.data?.attributes?.formats.small?.url ??
						cover?.data?.attributes?.url
					}
					alt={cover.data.attributes.altText}
				/>
			</Link>

			<Heading as="h2" size="small">
				<Link href={`/post/${slug}`}>{title}</Link>
			</Heading>

			<Styled.Resumo>{resumo}</Styled.Resumo>
		</Styled.Wrapper>
	);
};
