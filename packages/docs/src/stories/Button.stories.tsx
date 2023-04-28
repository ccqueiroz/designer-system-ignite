import type { StoryObj, Meta } from '@storybook/react'
import { ButtonProps, Button } from '@design-system-ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
    size: 'small',
  },
  argTypes: {
    onClick: {
      actinon: 'click',
    },
    size: {
      description: 'Set a button size configuration.',
      options: ['small', 'big'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {},
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
