import { HtmlContent } from '.';
import mock from './mockText';
export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: mock,
  },
  argTypes: {
    html: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <HtmlContent {...args} />
    </div>
  );
};
