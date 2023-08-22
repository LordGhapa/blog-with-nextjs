import React from 'react';
import { LoadPostsProps, loadPosts } from '../api/load-posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { PostsTemplate } from '../templates/PostsTemplate';
import { loadMenuAllLinks, loadMenuAllLinksProps } from '../utils/menuLinks';

export const getStaticProps: GetStaticProps<LoadPostsProps> = async () => {
	let data = null;
	let menuAllLinks = null;
	try {
		data = await loadPosts();

		menuAllLinks = await loadMenuAllLinks();
	} catch (e) {
		data = null;
		menuAllLinks = null;
	}

	if (!data || !data?.posts || !data?.posts?.data?.length) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			posts: data.posts,
			setting: data.setting,
			menuAllLinks,
		},
	};
};
export type indexProps = LoadPostsProps & {
	menuAllLinks: loadMenuAllLinksProps;
};
export default function Index({ posts, setting, menuAllLinks }: indexProps) {
	return (
		<>
			<Head>
				<title>
					{`  ${setting?.data?.attributes?.blogName} -
          ${setting?.data?.attributes?.blogDescription}`}
				</title>
				<meta
					name="description"
					content={setting?.data?.attributes?.blogDescription}
				/>
			</Head>
			<PostsTemplate
				posts={posts}
				setting={setting}
				menuAllLinks={menuAllLinks}
			/>
		</>
	);
}
