import React from "react";
import SafeEnvironment from "./SafeEnvironment";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof SafeEnvironment>;

const meta: Meta<typeof SafeEnvironment> = {
  title: "feedback/SafeEnvironment",
  component: SafeEnvironment,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <SafeEnvironment {...args}/>,
  args: {},
};
