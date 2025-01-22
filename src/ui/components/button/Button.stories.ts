import type { Meta, StoryObj } from "@storybook/react";
import {
  fn,
  within,
  expect,
  userEvent,
  waitFor,
} from "@storybook/test";

import { Button } from "./Button";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {};

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "select" },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Test Button",
    onClick: fn(),
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const buttonElement = canvas.getByTestId('test-button');

  // Generic tests to make sure the button is visible and clicks
  await userEvent.click(buttonElement);
  await waitFor(() => expect(buttonElement).toBeInTheDocument());
  await waitFor(() => expect(Primary.args?.onClick).toHaveBeenCalled());

};
