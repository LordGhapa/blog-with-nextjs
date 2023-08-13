import { PostGrid } from '../../components/PostGrid';
import { Setting } from '../../shared-types/Setting';
import { PostStrapi } from '../../shared-types/post-strapi';
import { loadMenuAllLinksProps } from '../../utils/menuLinks';

import { Base } from '../Base';

// import * as Styled from './styles';

export type PostsTemplateProps = {
  setting: Setting;
  posts?: PostStrapi;
  menuAllLinks: loadMenuAllLinksProps;
};

export const PostsTemplate = ({
  setting,
  posts,
  menuAllLinks,
}: PostsTemplateProps) => {
  return (
    <Base menuAllLinks={menuAllLinks} setting={setting}>
      {posts?.data?.length > 0 && <PostGrid posts={posts.data} />}
    </Base>
  );
};
