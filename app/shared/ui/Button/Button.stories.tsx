import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from './Button.tsx';

const meta = {
	title: 'Shared/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Test',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};
