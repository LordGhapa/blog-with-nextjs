import React from 'react';
import { LoadPostsProps, loadPosts } from '../../api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { PostsTemplate } from '../../templates/PostsTemplate';
import { loadCategories } from '../../api/load-categories';
import { useRouter } from 'next/router';
import { loadMenuAllLinks } from '../../utils/menuLinks';
import { indexProps } from '..';
import { capitalizeFirstLetter } from '../../utils/capitalizerFirstLetter';

export const getStaticPaths: GetStaticPaths = async () => {
	let data = null;

	try {
		data = await loadCategories();

		const paths = data.categories.data.map((category) => ({
			params: { slug: category?.attributes?.slug },
		}));
		return {
			paths: paths,
			fallback: false,
		};
	} catch (e) {
		data = null;
		console.log('ERRO NO PATH');
	}
	return {
		paths: [],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<LoadPostsProps> = async (ctx) => {
	let data = null;
	let menuAllLinks = null;
	try {
		data = await loadPosts({ categorySlug: `${ctx.params.slug}` });
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

export default function Index({ posts, setting, menuAllLinks }: indexProps) {
	const router = useRouter();
	const currentFilter = `Categoria: ${capitalizeFirstLetter(
		router.query.slug,
	)} `;
	return (
		<>
			<Head>
				<title>
					{`Categoria: ${router.query.slug} - ${setting?.data?.attributes?.blogName}`}
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
				currentFilter={currentFilter}
			/>
		</>
	);
}
