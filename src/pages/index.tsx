import React from 'react';
import { LoadPostsProps, loadPosts } from '../api/load-posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { PostsTemplate } from '../templates/PostsTemplate';
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: false,
//   };
// };

export const getStaticProps: GetStaticProps<LoadPostsProps> = async () => {
  let data = null;
  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
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
  // console.log(setting.data.attributes.blogName);

  return (
    <>
      <Head>
        <title>
          {`  ${setting.data.attributes.blogName} -
          ${setting.data.attributes.blogDescription}`}
        </title>
        <meta
          name="description"
          content={setting.data.attributes.blogDescription}
        />
      </Head>
      <PostsTemplate posts={posts} setting={setting} />
    </>
  );
}
