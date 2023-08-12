import React from 'react';
import { LoadPostsProps, loadPosts } from '../../api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { PostsTemplate } from '../../templates/PostsTemplate';

import { loadAuthors } from '../../api/load-authors';

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

  try {
    data = await loadPosts({ authorSlug: `${ctx.params.slug}` });
  } catch (e) {
    data = null;
    console.log('ERRO NO PROPS');
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
    },
  };
};

export default function Index({ posts, setting }: LoadPostsProps) {
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
      <PostsTemplate posts={posts} setting={setting} />
    </>
  );
}
