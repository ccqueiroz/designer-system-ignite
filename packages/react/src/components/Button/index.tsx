import React, { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  padding: '$2 $4',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',

  transition: 'all 0.3 easy-in-out',

  '&:hover': {
    filter: 'opacity(0.9)',
    boxShadow: '0 0 0 1px $colors$gray100',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonComponentProps = {
  children: React.ReactNode
  size: 'small' | 'big'
}

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
