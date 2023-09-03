import { Story, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/types';
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => StoryObj) => story();
