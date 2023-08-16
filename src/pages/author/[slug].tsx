import React from 'react';
import { LoadPostsProps, loadPosts } from '../../api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { PostsTemplate } from '../../templates/PostsTemplate';

import { loadAuthors } from '../../api/load-authors';
import { useRouter } from 'next/router';
import { indexProps } from '..';
import { loadMenuAllLinks } from '../../utils/menuLinks';
import { capitalizeFirstLetter } from '../../utils/capitalizerFirstLetter';

export const getStaticPaths: GetStaticPaths = async () => {
  let data = null;

  try {
    data = await loadAuthors();

    const paths = data.authors.data.map((author) => ({
      params: { slug: author.attributes.slug },
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
    data = await loadPosts({ authorSlug: `${ctx.params.slug}` });
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
  const currentFilter = `Autor: ${capitalizeFirstLetter(router.query.slug)} `;
  return (
    <>
      <Head>
        <title>
          {`Autor: ${router.query.slug} - ${setting?.data?.attributes?.blogName}`}
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
