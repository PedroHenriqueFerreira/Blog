import { PostCard, PostCardProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'default-slug',
    title: 'Default Title',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
} as Meta;

export const TypeScriptCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

export const JavaScriptCover: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '36rem' }}>
    <PostCard {...args} />
  </div>
);

JavaScriptCover.args = {
  cover:
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
};
