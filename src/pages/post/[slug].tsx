import React from 'react';
import { LoadPostsProps, loadPosts } from '../../api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { PostTemplate } from '../../templates/PostTemplate';
import { getPostBySlug } from '../../utils/targetbyslug';

export const getStaticPaths: GetStaticPaths = async () => {
  let data = null;

  try {
    data = await loadPosts();
    console.log(data);

    const paths = data.posts.data.map((post) => ({
      params: { slug: post.attributes.slug },
    }));
    console.log(paths);
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

  try {
    data = await loadPosts();
    const filteredInfo = getPostBySlug(data.posts.data, ctx.params.slug);
    post = { data: [filteredInfo] };
  } catch (e) {
    post = null;
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
      <PostTemplate posts={posts} setting={setting} />
    </>
  );
}
