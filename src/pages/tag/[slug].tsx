import React from 'react';
import { LoadPostsProps, loadPosts } from '../../api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { PostsTemplate } from '../../templates/PostsTemplate';

import { loadTags } from '../../api/load-tags';
import { useRouter } from 'next/router';

export const getStaticPaths: GetStaticPaths = async () => {
  let data = null;

  try {
    data = await loadTags();

    const paths = data.tags.data.map((tag) => ({
      params: { slug: tag.attributes.slug },
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
    data = await loadPosts({ tagSlug: `${ctx.params.slug}` });
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
      posts: data?.posts,
      setting: data?.setting,
    },
  };
};

export default function Index({ posts, setting }: LoadPostsProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {`Tag: ${router.query.slug} - ${setting?.data?.attributes?.blogName}`}
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
