import { PostGrid } from '../../components/PostGrid';
import { Setting } from '../../shared-types/Setting';
import { PostStrapi } from '../../shared-types/post-strapi';

import { Base } from '../Base';

// import * as Styled from './styles';

export type PostsTemplateProps = {
  setting: Setting;
  posts?: PostStrapi;
};

export const PostsTemplate = ({ setting, posts }: PostsTemplateProps) => {
  return (
    <Base setting={setting}>
      {posts?.data?.length > 0 && <PostGrid posts={posts.data} />}
    </Base>
  );
};
