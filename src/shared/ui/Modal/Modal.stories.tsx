import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

// import 'app/styles/index.scss';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
    quis earum dolorem tempora provident impedit officia cum, consectetur
    eligendi, cumque porro optio reiciendis voluptatum, eum ab laboriosam
    ullam consequatur?`,
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
    quis earum dolorem tempora provident impedit officia cum, consectetur
    eligendi, cumque porro optio reiciendis voluptatum, eum ab laboriosam
    ullam consequatur?`,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
