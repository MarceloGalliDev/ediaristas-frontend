import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserInformation from "./UserInformation";

type Story = StoryObj<typeof UserInformation>;

const meta: Meta<typeof UserInformation> = {
  title: "data-display/UserInformation",
  component: UserInformation,
  args: {
    name: "Marcelo",
    picture: "https://github.com/MarceloGalliDev.png",
    rating: 5,
    description: 'FullStack developer',
    isRating: true
  },
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <UserInformation {...args} />,
};
