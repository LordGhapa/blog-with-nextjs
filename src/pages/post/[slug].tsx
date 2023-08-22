import React from 'react';
import { LoadPostsProps, loadPosts } from '../../api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { PostTemplate } from '../../templates/PostTemplate';
import { getPostBySlug } from '../../utils/filteredBySlug';
import { indexProps } from '..';
import { loadMenuAllLinks } from '../../utils/menuLinks';

export const getStaticPaths: GetStaticPaths = async () => {
	let data = null;

	try {
		data = await loadPosts();
		const paths = data.posts.data.map((post) => ({
			params: { slug: post.attributes.slug },
		}));
		return {
			paths: paths,
			fallback: false,
		};
	} catch (e) {
		data = null;
	}
	return {
		paths: [],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<LoadPostsProps> = async (ctx) => {
	let data = null;
	let post = null;
	let menuAllLinks = null;

	try {
		data = await loadPosts();
		const filteredInfo = getPostBySlug(data.posts.data, ctx.params.slug);
		post = { data: [filteredInfo] };
		menuAllLinks = await loadMenuAllLinks();
	} catch (e) {
		post = null;
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
			posts: post,
			setting: data.setting,
			menuAllLinks,
		},
	};
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
			<PostTemplate
				posts={posts}
				setting={setting}
				menuAllLinks={menuAllLinks}
			/>
		</>
	);
}
