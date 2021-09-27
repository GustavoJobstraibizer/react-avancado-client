import { Meta, Story } from '@storybook/react'
import items from 'components/CartList/mock'
import CartDropdown from '.'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '90%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

Basic.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: 'R$ 300,00'
  }
}

export const empty: Story = () => (
  <div style={{ maxWidth: '90%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)
