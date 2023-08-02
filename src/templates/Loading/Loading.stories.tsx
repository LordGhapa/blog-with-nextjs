import { Loading } from '.';

export default {
  title: 'Loading',
  component: Loading,
  args: {
    children: 'Loading',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Loading {...args} />
    </div>
  );
};
