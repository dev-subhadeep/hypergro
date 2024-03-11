import type { Meta, StoryObj } from "@storybook/react"
import Pagination from "../components/Pagination"

const meta: Meta<typeof Pagination> = {
  title: "Hypergro/Pagination",
  component: Pagination,
}

export default meta

type Story = StoryObj<typeof Pagination>

export const FirstPage: Story = {
  args: {
    pageNumber: 1,
  },
}

export const InBetweenPage: Story = {
  args: {
    pageNumber: 4,
  },
}

export const LastPage: Story = {
  args: {
    pageNumber: 10,
  },
}
