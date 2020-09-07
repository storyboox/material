import {Story} from '@storybook/angular';

export const copyStory = (storyFn: Story, args: Record<string, string> = {}) => {
  const story = storyFn.bind({});
  story.args = {...args};
  return story;
};

export const format = (tpl: string, ...args: string[]) => args.reduce((acc, val) => acc.replace('%s', val), tpl);
