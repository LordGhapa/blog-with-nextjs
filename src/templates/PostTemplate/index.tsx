// import * as Styled from './styles';

import Link from 'next/link';
import { Post } from '../../components/Post';
import { Setting } from '../../shared-types/Setting';
import { PostData } from '../../shared-types/post-strapi';
import { Base } from '../Base';
import { PostTags } from '../../components/PostTags';
import * as Styled from './styles';
import { loadMenuAllLinksProps } from '../../utils/menuLinks';
import { Comments } from '../../components/Comments';

export type PostTemplateProps = {
	setting: Setting;
	posts?: { data: PostData[] };
	menuAllLinks: loadMenuAllLinksProps;
};

export const PostTemplate = ({
	setting,
	posts,
	menuAllLinks,
}: PostTemplateProps) => {
	const allowComments = posts?.data[0]?.attributes?.allowComments ?? true;
	return (
		<Base menuAllLinks={menuAllLinks} setting={setting}>
			{posts?.data === undefined ? (
				<>
					<span>Post Encontrado </span>
					<Link href={'/'}>Inicio</Link>
				</>
			) : (
				<>
					<Post {...posts?.data[0]?.attributes} />
					<Styled.TagsContainer>
						<PostTags data={posts?.data[0]?.attributes?.tags?.data} />
					</Styled.TagsContainer>
					{allowComments && (
						<Comments
							slug={posts?.data[0]?.attributes?.slug}
							title={posts?.data[0]?.attributes?.title}
						/>
					)}
				</>
			)}
		</Base>
	);
};
