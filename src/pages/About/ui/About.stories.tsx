import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import  About  from './About';

const meta = {
  title: 'pages/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {

  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]